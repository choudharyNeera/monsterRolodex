import "./search-box.styles.css";

const SearchBox = (props) => {
  return (
    <input
      type="search"
      className={`search-box ${props.className}`}
      placeholder="search monster"
      onChange={props.onSearchChange}
    />
  );
};

export default SearchBox;
