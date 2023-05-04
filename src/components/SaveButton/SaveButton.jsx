import styles from "../SaveButton/saveButton.module.css";
import PropTypes from "prop-types";

const SaveButton = ({ onClick }) => {
  return (
    <div className={styles.submitButtonContainer}>
      <button type="submit" onClick={onClick} className={styles.saveButton}>
        Save
      </button>
    </div>
  );
};

SaveButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default SaveButton;
