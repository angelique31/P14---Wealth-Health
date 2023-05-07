import { useContext, useEffect } from "react";
import EmployeeContext from "../../context/employeeContext";
import { useNavigate } from "react-router-dom";

import StateSelect from "../../components/CreatEmployee/StateSelect/StateSelect";
import DepartmentSelect from "../../components/CreatEmployee/DepartmentSelect/DepartmentSelect";
import InputField from "../../components/CreatEmployee/InputField/InputField";
import NavBar from "../../components/CreatEmployee/NavBar/NavBar";
import NavButtons from "../../components/CreatEmployee/NavButtons/NavButtons";
import SaveButton from "../../components/CreatEmployee/SaveButton/SaveButton";
import ValidationError from "../../components/CreatEmployee/ValidationError/ValidationError";
import { validateEmployeeForm } from "../../components/CreatEmployee/FormValidation/formValidation";
import styles from "../../pages/EmployeeForm/employeeForm.module.css";
import validationStyles from "../../components/CreatEmployee/ValidationError/validationError.module.css";

function EmployeeForm() {
  const {
    employee,
    setEmployee,
    errors,
    setErrors,
    showErrors,
    setShowErrors,
    addEmployee,
  } = useContext(EmployeeContext);

  const navigate = useNavigate();

  useEffect(() => {
    const newErrors = validateEmployeeForm(employee);
    setErrors(newErrors);
  }, [employee, setErrors]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = validateEmployeeForm(employee);
    setErrors(formErrors);

    if (Object.keys(formErrors).length > 0) {
      // Afficher les messages d'erreurs
      setShowErrors(true);
      return;
    }
    // Utiliser addEmployee du contexte pour ajouter le nouvel employé
    addEmployee(employee);

    // Ici, vous pouvez enregistrer l'employé dans le state global ou dans une base de données.

    // Naviguer vers la page "ViewEmployees"
    navigate("/view-employees");
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
