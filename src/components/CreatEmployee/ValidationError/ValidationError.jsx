import PropTypes from "prop-types";
import ValidationErrorStyles from "./ValidationErrorStyles";

function ValidationError({ message, className }) {
  const { ValidationErrorWrapper, DepartmentErrorWrapper } =
    ValidationErrorStyles;

  const WrapperComponent =
    className === "departmentError"
      ? DepartmentErrorWrapper
      : ValidationErrorWrapper;

  return <WrapperComponent>{message}</WrapperComponent>;
}

ValidationError.propTypes = {
  message: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default ValidationError;
