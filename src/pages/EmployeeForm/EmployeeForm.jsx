// Bibliothèques externes
import { useContext, useEffect, useState } from "react";
import EmployeeContext from "../../context/employeeContext";
import { useNavigate } from "react-router-dom";

// Composants internes
import NavBar from "../../components/CreatEmployee/NavBar/NavBar";
import NavButtons from "../../components/CreatEmployee/NavButtons/NavButtons";
import SaveButton from "../../components/CreatEmployee/SaveButton/SaveButton";

import { validateEmployeeForm } from "../../components/CreatEmployee/FormValidation/formValidation";
import FormField from "../../components/CreatEmployee/FormField/FormField";
import { DepartmentLabel } from "../../components/CreatEmployee/FormField/FormField.styles";

import {
  FormContent,
  IdentityContent,
  AddressContent,
  DepartmentContainer,
  DepartmentContainerLabel,
} from "./EmployeeForm.styled";

// Librairie personnalisée
import Modal from "angel1979-react-simple-modal";

/**
 * EmployeeForm is a functional React component that displays a form for inputting and validating employee data.
 *
 * @returns {React.Element} The rendered EmployeeForm component.
 *
 * Note:
 * - The component uses the `EmployeeContext` to manage and manipulate the employee data state and related error states.
 * - It validates the employee data, showing error messages when necessary, and uses the addEmployee function to add a new employee.
 * - It uses a Modal to confirm successful form submission.
 */

function EmployeeForm() {
  const {
    employee,
    setEmployee,
    errors,
    setErrors,
    showErrors,
    setShowErrors,
    addEmployee,
    resetEmployee,
  } = useContext(EmployeeContext);

  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const newErrors = validateEmployeeForm(employee);
    setErrors(newErrors);
  }, [employee, setErrors]);

  useEffect(() => {
    // Obtenez la date du jour
    const today = new Date();
    // Définir l'année à 18 ans en arrière
    today.setFullYear(today.getFullYear() - 18);
    // Convertir en format YYYY-MM-DD
    const dateOfBirth = today.toISOString().substring(0, 10);

    setEmployee((prev) => ({
      ...prev,
      dateOfBirth: prev.dateOfBirth || dateOfBirth,
      startDate: prev.startDate || new Date().toISOString().substring(0, 10),
    }));

    // pour que les messages d'erreur n'apparaissent pas lors de l'arrivée de l'utilisateur sur le formulaire
    // Réinitialiser l'état showErrors lors du montage du composant
    setShowErrors(false);

    // Réinitialiser l'état showErrors lors du démontage du composant
    return () => {
      setShowErrors(false);
    };
  }, [setShowErrors, setEmployee]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = validateEmployeeForm(employee);
    setErrors(formErrors);

    // vérifier si toutes les valeurs d'erreurs sont vides:
    if (Object.values(formErrors).some((error) => error !== "")) {
      setShowErrors(true);
      return;
    }

    addEmployee(employee);
    resetEmployee();

    // Cacher les erreurs quand le modale est ouverte
    setShowErrors(false);

    setIsModalOpen(true);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <section>
      <NavBar />
      <NavButtons activePage="createEmployee" />
      <form onSubmit={handleSubmit}>
        <FormContent>
          <IdentityContent>
            <FormField
              label="First Name"
              type="text"
              name="firstName"
              id="firstName"
              value={employee.firstName}
              onChange={handleChange}
              error={errors.firstName}
              showError={showErrors}
              autoFocus
            />

            <FormField
              label="Last Name"
              type="text"
              name="lastName"
              id="lastName"
              value={employee.lastName}
              onChange={handleChange}
              error={errors.lastName}
              showError={showErrors}
            />

            <FormField
              label="Date of Birth"
              type="date"
              name="dateOfBirth"
              id="dateOfBirth"
              value={employee.dateOfBirth}
              onChange={handleChange}
              error={errors.dateOfBirth}
              showError={showErrors}
            />

            <FormField
              label="Start Date"
              type="date"
              name="startDate"
              id="startDate"
              value={employee.startDate}
              onChange={handleChange}
              error={errors.startDate}
              showError={showErrors}
            />
          </IdentityContent>
          <AddressContent>
            <FormField
              label="Street"
              type="text"
              name="street"
              id="street"
              value={employee.street}
              onChange={handleChange}
              error={errors.street}
              showError={showErrors}
            />

            <FormField
              label="City"
              type="text"
              name="city"
              id="city"
              value={employee.city}
              onChange={handleChange}
              error={errors.city}
              showError={showErrors}
            />

            <FormField
              label="State"
              type="stateSelect"
              name="state"
              id="state"
              value={employee.state}
              onChange={handleChange}
              error={errors.state}
              showError={showErrors}
            />

            <FormField
              label="Zip code"
              type="text"
              name="zipCode"
              id="zipCode"
              value={employee.zipCode}
              onChange={handleChange}
              error={errors.zipCode}
              showError={showErrors}
            />
          </AddressContent>
        </FormContent>
        <DepartmentContainer>
          <DepartmentContainerLabel htmlFor="department">
            <FormField
              labelComponent={DepartmentLabel}
              label="Département"
              type="departmentSelect"
              name="department"
              id="department"
              value={employee.department}
              onChange={handleChange}
              showError={showErrors}
              error={errors.department}
            />
          </DepartmentContainerLabel>
        </DepartmentContainer>

        {/* <SaveButton onClick={() => {}} /> */}
        <SaveButton onClick={handleSubmit} />
        <Modal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          title="Employee's data have been successfully stored!"
          buttonLabel="Close"
          onButtonClick={() => {
            handleModalClose();
            navigate("/view-employees");
          }}
        />
      </form>
    </section>
  );
}
export default EmployeeForm;
