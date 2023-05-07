import PropTypes from "prop-types";

function SearchBox({ onSearch }) {
  const handleSearchChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div>
      <label>Search: </label>
      <input type="search" onChange={handleSearchChange} />
    </div>
  );
}

SearchBox.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBox;
