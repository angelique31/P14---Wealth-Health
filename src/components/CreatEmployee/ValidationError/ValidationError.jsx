import PropTypes from "prop-types";
import styles from "./validationError.module.css";

// const ValidationError = ({ message }) => {
//   return <span className={styles.validationError}>{message}</span>;
// };
function ValidationError({ message, className }) {
  return (
    <span className={`${styles.validationError} ${className}`}>{message}</span>
  );
}

ValidationError.propTypes = {
  message: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default ValidationError;
