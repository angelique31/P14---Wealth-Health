import Modal from "react-modal";
import PropTypes from "prop-types";
import {
  ModalContent,
  ButtonContainer,
  StyledH2,
} from "./EmployeeDetailsModalStyles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle as lightCircleXmark } from "@fortawesome/free-regular-svg-icons";

const EmployeeDetailsModal = ({ isOpen, onRequestClose, employee }) => {
  if (!employee) return null;

  const modalStyles = {
    content: {
      height: "400px",
      // Ajoutez ici d'autres styles si nécessaire
    },
  };
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={modalStyles}>
      <ButtonContainer>
        <FontAwesomeIcon
          icon={lightCircleXmark}
          onClick={onRequestClose}
          size="2x"
          color="rgb(147, 173, 24)"
        />
      </ButtonContainer>
      <ModalContent>
        <StyledH2>Employee Details</StyledH2>
        <p>
          Name: {employee.firstName} {employee.lastName}
        </p>
        <p>Start Date: {employee.startDate}</p>
        <p>Department: {employee.department}</p>
        <p>Date of Birth: {employee.dateOfBirth}</p>
        <p>
          Address: {employee.street}, {employee.city}, {employee.state}{" "}
          {employee.zipCode}
        </p>
      </ModalContent>
    </Modal>
  );
};
EmployeeDetailsModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  employee: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    startDate: PropTypes.string,
    department: PropTypes.string,
    dateOfBirth: PropTypes.string,
    street: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    zipCode: PropTypes.string,
  }),
};

EmployeeDetailsModal.defaultProps = {
  employee: null,
};
export default EmployeeDetailsModal;
