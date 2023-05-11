import PropTypes from "prop-types";
import departments from "../../../data/departmentsData";
import DepartmentSelectWrapper from "./DepartmentSelectStyles";

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
