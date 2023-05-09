import PropTypes from "prop-types";
import { StyledSearchInput, StyledSearchContainer } from "./SearchBoxStyles";

function SearchBox({ onSearch }) {
  const handleSearchChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <StyledSearchContainer>
      <label>Search </label>
      <StyledSearchInput
        type="search"
        onChange={handleSearchChange}
        placeholder="Search any text or date"
      />
    </StyledSearchContainer>
  );
}

SearchBox.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBox;
