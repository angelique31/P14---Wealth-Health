import { states } from "../../data/states";
import PropTypes from "prop-types";

function StateSelect({ name, value, onChange }) {
  return (
    <select name={name} value={value} onChange={onChange}>
      <option value="">Please choose a state</option>
      {states.map((state, index) => (
        <option key={index} value={state.abbreviation}>
          {state.name}
        </option>
      ))}
    </select>
  );
}

StateSelect.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default StateSelect;
