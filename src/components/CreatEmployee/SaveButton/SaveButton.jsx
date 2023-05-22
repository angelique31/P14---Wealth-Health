import PropTypes from "prop-types";
import SaveButtonStyles from "./SaveButton.styled";

const SaveButton = ({ onClick }) => {
  return (
    <SaveButtonStyles.SubmitButtonContainer>
      <SaveButtonStyles.SaveButton type="submit" onClick={onClick}>
        Save
      </SaveButtonStyles.SaveButton>
    </SaveButtonStyles.SubmitButtonContainer>
  );
};

SaveButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default SaveButton;
