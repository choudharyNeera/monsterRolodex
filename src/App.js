import React, { useEffect, useState } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

const App = () => {

  const [ monsters, setMonsters ] = useState([]);
  const [ searchString, setSearchString ] = useState('');
  const [ filteredMonsters, setFilteredMonsters ] = useState(monsters);

  const onSearchChange = (event) => {
    const searchText = event.target.value.toLocaleLowerCase();
    setSearchString(searchText);
  }

  useEffect(() => {
    const matchedMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchString);
    });

    console.log('event fired');
    setFilteredMonsters(matchedMonsters);
  }, [monsters, searchString])

  // const filteredMonsters = monsters.filter((monster) => {
  //   return monster.name.toLocaleLowerCase().includes(searchString);
  // });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, [])

  return (
    <div className="App">
      <h1 className="app-title">Monster Rolodex</h1>
      <SearchBox
        onSearchChange={onSearchChange}
        className="monster-search-box"
      />
      <CardList monsters={filteredMonsters} /> 
    </div>
  );
};

export default App;
