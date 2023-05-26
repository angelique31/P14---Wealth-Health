import ValidationError from "../ValidationError/ValidationError";
import InputField from "../InputField/InputField";
import { InputText } from "../../../pages/EmployeeForm/EmployeeForm.styled";
import { Label, DepartmentLabel } from "./FormField.styles";

import StateSelect from "../StateSelect/StateSelect";
import DepartmentSelect from "../DepartmentSelect/DepartmentSelect";
import PropTypes from "prop-types";

const InputLabel = ({
  label,
  type,
  name,
  id,
  value,
  onChange,
  showError,
  error,
  labelComponent: LabelComponent = Label,
}) => {
  let inputField;

  switch (type) {
    case "text":
    case "date":
      inputField = (
        <InputField
          as={InputText}
          type={type}
          name={name}
          id={id}
          value={value}
          onChange={onChange}
        />
      );
      break;
    case "stateSelect":
      inputField = (
        <StateSelect name={name} id={id} value={value} onChange={onChange} />
      );
      break;
    case "departmentSelect":
      LabelComponent = DepartmentLabel;
      inputField = (
        <DepartmentSelect
          name={name}
          id={id}
          value={value}
          onChange={onChange}
        />
      );
      break;
    default:
      inputField = (
        <InputField
          as={InputText}
          type="text"
          name={name}
          id={id}
          value={value}
          onChange={onChange}
        />
      );
  }

  return (
    <>
      <LabelComponent htmlFor={id}>
        {label}
        {inputField}
      </LabelComponent>
      {showError && error && <ValidationError message={error} />}
    </>
  );
};

InputLabel.propTypes = {
  labelComponent: PropTypes.elementType,
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "date", "stateSelect", "departmentSelect"]),
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  showError: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

InputLabel.defaultProps = {
  error: "",
};

export default InputLabel;
