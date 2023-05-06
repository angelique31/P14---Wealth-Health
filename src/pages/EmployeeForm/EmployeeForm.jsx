import { useContext, useEffect } from "react";
import EmployeeContext from "../../context/employeeContext";
import StateSelect from "../../components/stateSelect/StateSelect";
import DepartmentSelect from "../../components/DepartmentSelect/DepartmentSelect";
import InputField from "../../components/InputField/InputField";
import NavBar from "../../components/NavBar/NavBar";
import NavButtons from "../../components/NavButtons/NavButtons";
import SaveButton from "../../components/SaveButton/SaveButton";
import ValidationError from "../../components/ValidationError/ValidationError";
import { validateEmployeeForm } from "../../components/FormValidation/formValidation";
import styles from "../../pages/EmployeeForm/employeeForm.module.css";
import validationStyles from "../../components/ValidationError/validationError.module.css";

function EmployeeForm() {
  const {
    employee,
    setEmployee,
    errors,
    setErrors,
    showErrors,
    setShowErrors,
  } = useContext(EmployeeContext);

  useEffect(() => {
    const newErrors = validateEmployeeForm(employee);
    setErrors(newErrors);
  }, [employee, setErrors]);

  const validateForm = () => {
    const newErrors = validateEmployeeForm(employee);

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEmployee({ ...employee, [name]: value });

    // Appeler validateForm lors de chaque modification de l'entrée pour mettre à jour les erreurs
    // validateForm();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowErrors(true);
    if (validateForm()) {
      saveEmployee();
      // Afficher la fenêtre modale de confirmation
    }
  };

  const saveEmployee = () => {
    const employees = JSON.parse(localStorage.getItem("employees")) || [];
    employees.push(employee);
    localStorage.setItem("employees", JSON.stringify(employees));
  };

  return (
    <section>
      <NavBar />
      {/* <NavButtons /> */}
      <NavButtons activePage="createEmployee" />
      <form onSubmit={handleSubmit}>
        <div className={styles.formContent}>
          <div className={styles.identityContent}>
            <InputField
              className={styles.inputText}
              label="First Name"
              type="text"
              name="firstName"
              value={employee.firstName}
              onChange={handleChange}
            />
            {showErrors && errors.firstName && (
              <ValidationError message={errors.firstName} />
            )}

            <InputField
              className={styles.inputText}
              label="Last Name"
              type="text"
              name="lastName"
              value={employee.lastName}
              onChange={handleChange}
            />
            {showErrors && errors.lastName && (
              <ValidationError message={errors.lastName} />
            )}
            <InputField
              label="Date of Birth"
              type="date"
              name="dateOfBirth"
              value={employee.dateOfBirth}
              onChange={handleChange}
            />
            {showErrors && errors.dateOfBirth && (
              <ValidationError message={errors.dateOfBirth} />
            )}
            <InputField
              label="Start Date"
              type="date"
              name="startDate"
              value={employee.startDate}
              onChange={handleChange}
            />
            {showErrors && errors.startDate && (
              <ValidationError message={errors.startDate} />
            )}
          </div>
          <div className={styles.addressContent}>
            <InputField
              className={styles.inputText}
              label="Street"
              type="text"
              name="street"
              value={employee.street}
              onChange={handleChange}
            />
            {showErrors && errors.street && (
              <ValidationError message={errors.street} />
            )}
            <InputField
              className={styles.inputText}
              label="City"
              type="text"
              name="city"
              value={employee.city}
              onChange={handleChange}
            />
            {showErrors && errors.city && (
              <ValidationError message={errors.city} />
            )}
            <label>
              State
              <StateSelect
                name="state"
                value={employee.state}
                onChange={handleChange}
              />
            </label>
            {showErrors && errors.state && (
              <ValidationError message={errors.state} />
            )}
            <InputField
              className={styles.inputText}
              label="Zip code"
              type="text"
              name="zipCode"
              value={employee.zipCode}
              onChange={handleChange}
            />
            {showErrors && errors.zipCode && (
              <ValidationError message={errors.zipCode} />
            )}
          </div>
        </div>
        <div className={styles.departmentContainer}>
          <label>
            Département
            <DepartmentSelect
              name="department"
              value={employee.department}
              onChange={handleChange}
            />
            {showErrors && errors.department && (
              <ValidationError
                className={`${validationStyles.validationError} ${validationStyles.departmentError}`}
                message={errors.department}
              />
            )}
          </label>
        </div>

        <SaveButton />
      </form>
    </section>
  );
}

export default EmployeeForm;
