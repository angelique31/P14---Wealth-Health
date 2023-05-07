import PropTypes from "prop-types";

function EntriesPerPageSelect({ onEntriesChange }) {
  const handleSelectChange = (event) => {
    onEntriesChange(parseInt(event.target.value, 10));
  };

  return (
    <div>
      <label>Show </label>
      <select onChange={handleSelectChange}>
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
      <label> entries</label>
    </div>
  );
}

EntriesPerPageSelect.propTypes = {
  onEntriesChange: PropTypes.func.isRequired,
};

export default EntriesPerPageSelect;
