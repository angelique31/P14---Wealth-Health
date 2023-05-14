import Modal from "react-modal";
import PropTypes from "prop-types";

const EmployeeDetailsModal = ({ isOpen, onRequestClose, employee }) => {
  if (!employee) return null;

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h2>Employee Details</h2>
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
      <button onClick={onRequestClose}>Close</button>
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
