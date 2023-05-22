import PropTypes from "prop-types";
import ValidationErrorStyles from "./ValidationError.styled";

/**
 * ValidationError is a component that renders an error message.
 * The style of the error message is determined by the className property.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.message - The error message to display.
 * @param {string} props.className - The class name that determines the style of the error message. If it is 'departmentError', a specific style is applied.
 */

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
