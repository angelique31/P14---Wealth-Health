import { useContext } from "react";
import EmployeeContext from "../../context/employeeContext";
import StateSelect from "../../components/stateSelect/StateSelect";
import DepartmentSelect from "../../components/DepartmentSelect/DepartmentSelect";
import InputField from "../../components/InputField/InputField";
import styles from "../../pages/EmployeeForm/employeeForm.module.css";
import NavBar from "../../components/NavBar/NavBar";
import NavButtons from "../../components/NavButtons/NavButtons";
import SaveButton from "../../components/SaveButton/SaveButton";
import ValidationError from "../../components/ValidationError/ValidationError";
import { validateEmployeeForm } from "../../components/FormValidation/formValidation";

function EmployeeForm() {
  const { employee, setEmployee, errors, setErrors } =
    useContext(EmployeeContext);

  const validateForm = () => {
    const newErrors = validateEmployeeForm(employee);

    // if (employee.firstName.length < 2) {
    //   newErrors.firstName = "First name should be at least 2 characters long";
    // }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEmployee({ ...employee, [name]: value });
    // Appeler validateForm lors de chaque modification de l'entrée pour mettre à jour les erreurs
    validateForm();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
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
              label="First Name"
              type="text"
              name="firstName"
              value={employee.firstName}
              onChange={handleChange}
            />
            {errors.firstName && <ValidationError message={errors.firstName} />}
            <InputField
              label="Last Name"
              type="text"
              name="lastName"
              value={employee.lastName}
              onChange={handleChange}
            />
            {errors.lastName && <ValidationError message={errors.lastName} />}
            <InputField
              label="Date of Birth"
              type="date"
              name="dateOfBirth"
              value={employee.dateOfBirth}
              onChange={handleChange}
            />
            <InputField
              label="Start Date"
              type="date"
              name="startDate"
              value={employee.startDate}
              onChange={handleChange}
            />
          </div>
          <div className={styles.addressContent}>
            <InputField
              label="Street"
              type="text"
              name="street"
              value={employee.street}
              onChange={handleChange}
            />
            <InputField
              label="City"
              type="text"
              name="city"
              value={employee.city}
              onChange={handleChange}
            />
            <label>
              State
              <StateSelect
                name="state"
                value={employee.state}
                onChange={handleChange}
              />
            </label>
            <InputField
              label="Zip code"
              type="text"
              name="zipCode"
              value={employee.zipCode}
              onChange={handleChange}
            />
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
          </label>
        </div>

        <SaveButton />
      </form>
    </section>
  );
}

export default EmployeeForm;
