import PropTypes from "prop-types";
import departments from "../../data/departmentsData";
import styles from "../DepartmentSelect/departmentSelect.module.css";

function DepartmentSelect({ name, value, onChange }) {
  return (
    <select
      className={styles.departmentSelect}
      name={name}
      value={value}
      onChange={onChange}
    >
      <option value="">Please choose a Department</option>
      {departments.map((department) => (
        <option key={department} value={department}>
          {department}
        </option>
      ))}
    </select>
  );
}

DepartmentSelect.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default DepartmentSelect;
