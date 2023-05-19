import { useContext, useEffect, useState } from "react";
import EmployeeContext from "../../context/employeeContext";
import { useNavigate } from "react-router-dom";
// import Modal from "../../components/CreatEmployee/PluginModal/PluginModal";

import StateSelect from "../../components/CreatEmployee/StateSelect/StateSelect";
import DepartmentSelect from "../../components/CreatEmployee/DepartmentSelect/DepartmentSelect";
import InputField from "../../components/CreatEmployee/InputField/InputField";
import NavBar from "../../components/CreatEmployee/NavBar/NavBar";
import NavButtons from "../../components/CreatEmployee/NavButtons/NavButtons";
import SaveButton from "../../components/CreatEmployee/SaveButton/SaveButton";
import ValidationError from "../../components/CreatEmployee/ValidationError/ValidationError";
import { validateEmployeeForm } from "../../components/CreatEmployee/FormValidation/formValidation";

import {
  ValidationErrorWrapper,
  DepartmentErrorWrapper,
} from "../../components/CreatEmployee/ValidationError/ValidationErrorStyles";

import {
  FormContent,
  IdentityContent,
  AddressContent,
  Label,
  DepartmentContainer,
  DepartmentContainerLabel,
  InputText,
} from "./EmployeeFormStyles";

import Modal from "angel1979-react-simple-modal";

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

    //pour que les messages d'erreur n'apparaissent pas lors de l'arrivée de l'utilisateur sur le formulaire
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
      // Afficher les messages d'erreurs
      setShowErrors(true);
      return;
    }
    // Utiliser addEmployee du contexte pour ajouter le nouvel employé
    addEmployee(employee);
    //Utiliser resetEmployee du contexte  pour réinitialiser les valeurs de l'employé
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
            <Label htmlFor="firstName">
              First Name
              <InputField
                autoFocus
                as={InputText}
                type="text"
                name="firstName"
                id="firstName"
                value={employee.firstName}
                onChange={handleChange}
              />
            </Label>

            {showErrors && errors.firstName && (
              <ValidationError message={errors.firstName} />
            )}

            <Label htmlFor="lastName">
              Last Name
              <InputField
                as={InputText}
                type="text"
                name="lastName"
                id="lastName"
                value={employee.lastName}
                onChange={handleChange}
              />
            </Label>
            {showErrors && errors.lastName && (
              <ValidationError message={errors.lastName} />
            )}
            <Label htmlFor="dateOfBirth">
              Date of Birth
              <InputField
                type="date"
                name="dateOfBirth"
                id="dateOfBirth"
                value={employee.dateOfBirth}
                onChange={handleChange}
              />
            </Label>
            {showErrors && errors.dateOfBirth && (
              <ValidationError message={errors.dateOfBirth} />
            )}
            <Label htmlFor="startDate">
              Start Date
              <InputField
                type="date"
                name="startDate"
                id="startDate"
                value={employee.startDate}
                onChange={handleChange}
              />
            </Label>
            {showErrors && errors.startDate && (
              <ValidationError message={errors.startDate} />
            )}
          </IdentityContent>
          <AddressContent>
            <Label htmlFor="street">
              Street
              <InputField
                as={InputText}
                type="text"
                name="street"
                id="street"
                value={employee.street}
                onChange={handleChange}
              />
            </Label>
            {showErrors && errors.street && (
              <ValidationError message={errors.street} />
            )}
            <Label htmlFor="city">
              City
              <InputField
                as={InputText}
                type="text"
                name="city"
                id="city"
                value={employee.city}
                onChange={handleChange}
              />
            </Label>
            {showErrors && errors.city && (
              <ValidationError message={errors.city} />
            )}
            <Label htmlFor="state">
              State
              <StateSelect
                name="state"
                id="state"
                value={employee.state}
                onChange={handleChange}
              />
            </Label>
            {showErrors && errors.state && (
              <ValidationError message={errors.state} />
            )}
            <Label htmlFor="zipCode">
              Zip code
              <InputField
                as={InputText}
                type="text"
                name="zipCode"
                id="zipCode"
                value={employee.zipCode}
                onChange={handleChange}
              />
            </Label>
            {showErrors && errors.zipCode && (
              <ValidationError message={errors.zipCode} />
            )}
          </AddressContent>
        </FormContent>
        <DepartmentContainer>
          <DepartmentContainerLabel htmlFor="department">
            Département
            <DepartmentSelect
              name="department"
              id="department"
              value={employee.department}
              onChange={handleChange}
            />
            {showErrors && errors.department && (
              <ValidationErrorWrapper>
                <DepartmentErrorWrapper>
                  {errors.department}
                </DepartmentErrorWrapper>
              </ValidationErrorWrapper>
            )}
          </DepartmentContainerLabel>
        </DepartmentContainer>

        <SaveButton onClick={() => {}} />

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
