import PropTypes from "prop-types";
import { StyledSearchInput, StyledSearchContainer } from "./SearchBox.styled";

/**
 * SearchBox is a component that provides a search input field for the user.
 * SearchBox est un composant qui fournit un champ de saisie de recherche pour l'utilisateur.

 * @param {Object} props - The properties passed to the component.
 * @param {function} props.onSearch - The function to call when the search input changes.
 */

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
