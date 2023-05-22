import PropTypes from "prop-types";
import StateSelectWrapper from "./StateSelect.styled";
import { states } from "../../../data/states";

function StateSelect({ name, value, onChange }) {
  return (
    <StateSelectWrapper name={name} value={value} onChange={onChange}>
      <option value="">Please choose a state</option>
      {states.map((state, index) => (
        <option key={index} value={state.abbreviation}>
          {state.name}
        </option>
      ))}
    </StateSelectWrapper>
  );
}

StateSelect.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default StateSelect;
