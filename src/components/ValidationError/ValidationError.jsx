import PropTypes from "prop-types";
import styles from "./validationError.module.css";

const ValidationError = ({ message }) => {
  return <span className={styles.validationError}>{message}</span>;
};

ValidationError.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ValidationError;
