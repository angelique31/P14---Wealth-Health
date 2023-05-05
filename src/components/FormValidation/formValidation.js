import { validateField } from "../FormValidation/validateField";

export const validateEmployeeForm = (employee) => {
  return {
    ...validateField(
      "firstName",
      employee.firstName,
      2,
      "First name should be at least 2 characters long."
    ),
    ...validateField(
      "lastName",
      employee.lastName,
      2,
      "Last name should be at least 2 characters long."
    ),
    ...validateField(
      "street",
      employee.city,
      3,
      "L'adresse doit contenir au moins 3 caractères."
    ),
    ...validateField(
      "city",
      employee.city,
      3,
      "La ville doit contenir au moins 3 caractères."
    ),
    ...validateField(
      "state",
      employee.state,
      2,
      "L'Etat doit contenir au moins 2 caractères."
    ),
    ...validateField(
      "zipCode",
      employee.zipCode,
      5,
      "Le code postal doit contenir au moins 5 caractères."
    ),
    // Ajoutez d'autres validations ici pour les autres champs...
  };
};
