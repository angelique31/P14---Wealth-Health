import { validateField } from "../FormValidation/validateField";

const validateCustomField = (
  value,
  minLength,
  regex,
  lengthErrorMessage,
  regexErrorMessage
) => {
  let error = "";
  if (value.trim().length < minLength) {
    error = lengthErrorMessage;
  } else if (!regex.test(value)) {
    error = regexErrorMessage;
  }
  return error;
};

export const validateEmployeeForm = (employee) => {
  return {
    ...validateField(
      "dateOfBirth",
      employee.dateOfBirth,
      3,
      "Please enter your date of birth"
    ),
    ...validateField("startDate", employee.startDate, 3, "Please enter a date"),
    ...validateField("state", employee.state, 2, "Please choose a State"),
    ...validateField(
      "department",
      employee.department,
      3,
      "Please choose a department"
    ),
    firstName: validateCustomField(
      employee.firstName,
      2,
      /^[a-zA-ZÀ-ÿ\s-]+$/i,
      "First name should be at least 2 characters long.",
      "Seules les lettres et les espaces et les traits d'union sont autorisés."
    ),
    lastName: validateCustomField(
      employee.lastName,
      2,
      /^[a-zA-ZÀ-ÿ\s-]+$/i,
      "Last name should be at least 2 characters long.",
      "Seules les lettres et les espaces et les traits d'union sont autorisés."
    ),
    street: validateCustomField(
      employee.street,
      3,
      /^[a-zA-Z0-9À-ÿ\s-]+$/i,
      "The address must contain at least 3 characters.",
      "Seules les lettres, les chiffres, les espaces et les traits d'union sont autorisés."
    ),
    city: validateCustomField(
      employee.city,
      3,
      /^[a-zA-ZÀ-ÿ\s-]+$/i,
      "City is required",
      "Seules les lettres, les espaces et les traits d'union sont autorisés."
    ),
    zipCode: validateCustomField(
      employee.zipCode,
      5,
      /^\d{5}$/,
      "Le code postal doit contenir 5 chiffres.",
      "Le code postal doit être composé uniquement de chiffres."
    ),
  };
};
