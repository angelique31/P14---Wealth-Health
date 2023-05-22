import PropTypes from "prop-types";
import departments from "../../../data/departmentsData";
import DepartmentSelectWrapper from "./DepartmentSelect.styled.js";

/**
 * Dropdown department selector.
 * It takes three props: `name`, `value`, and `onChange`.
 *
 * @component
 * @example
 * return (
 *   <DepartmentSelect name="department" value={employee.department} onChange={handleChange} />
 * )
 *
 * @param {string} name - Name of the select element.
 * @param {string} value - The currently selected value in the dropdown.
 * @param {Function} onChange - Function to call when the selected value changes.
 */

function DepartmentSelect({ name, value, onChange }) {
  return (
    <DepartmentSelectWrapper name={name} value={value} onChange={onChange}>
      <option value="">Please choose a Department</option>
      {departments.map((department) => (
        <option key={department} value={department}>
          {department}
        </option>
      ))}
    </DepartmentSelectWrapper>
  );
}

DepartmentSelect.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default DepartmentSelect;
