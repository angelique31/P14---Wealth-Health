import PropTypes from "prop-types";
import { StyledDiv, StyledSelect } from "./PageSelectStyles";

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
