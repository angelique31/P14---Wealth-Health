import PropTypes from "prop-types";
import { StyledDiv, StyledSelect } from "./PageSelect.styled";

/**
 * EntriesPerPageSelect is a component that allows users to select the number of entries to be displayed per page.
 * EntriesPerPageSelect est un composant qui permet aux utilisateurs de sélectionner le nombre d'entrées à afficher par page.
 * @param {Object} props - The properties passed to the component.
 * @param {function} props.onEntriesChange - The function to call when the selected number of entries per page changes.
 */

function EntriesPerPageSelect({ onEntriesChange }) {
  const handleSelectChange = (event) => {
    onEntriesChange(parseInt(event.target.value, 10));
  };

  return (
    <StyledDiv>
      <label>Show </label>
      <StyledSelect onChange={handleSelectChange}>
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </StyledSelect>
      <label> entries</label>
    </StyledDiv>
  );
}

EntriesPerPageSelect.propTypes = {
  onEntriesChange: PropTypes.func.isRequired,
};

export default EntriesPerPageSelect;
