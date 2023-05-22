import { validateField } from "../FormValidation/validateField";

/**
 * @function validateCustomField
 * @description Validates a custom form field by checking its length and whether it matches a provided regular expression.
 * @description Valide un champ de formulaire personnalisé en vérifiant sa longueur et s'il correspond à une expression régulière fournie.
 *
 * @param {string} value - The value of the field to validate.
 * @param {number} minLength - The minimum length the field value should have.
 * @param {RegExp} regex - The regular expression the field value should match.
 * @param {string} lengthErrorMessage - The error message to return if the field value is shorter than the minimum length.
 * @param {string} regexErrorMessage - The error message to return if the field value doesn't match the regular expression.
 * @returns {string} An error message if the field value is invalid, otherwise an empty string.
 *
 * @function validateEmployeeForm
 * @description Validates an employee form by checking the validity of each field.
 * @description Valide un formulaire d'employé en vérifiant la validité de chaque champ.
 * @param {Object} employee - The employee data to validate.
 * @returns {Object} An object containing error messages for each invalid field.
 */

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
      "Only letters, spaces and hyphens are allowed."
    ),
    lastName: validateCustomField(
      employee.lastName,
      2,
      /^[a-zA-ZÀ-ÿ\s-]+$/i,
      "Last name should be at least 2 characters long.",
      "Only letters, spaces and hyphens are allowed."
    ),
    street: validateCustomField(
      employee.street,
      3,
      /^[a-zA-Z0-9À-ÿ\s-]+$/i,
      "The address must contain at least 3 characters.",
      "Only letters, numbers, spaces and hyphens are allowed."
    ),
    city: validateCustomField(
      employee.city,
      3,
      /^[a-zA-ZÀ-ÿ\s-]+$/i,
      "City is required",
      "Only letters, spaces and hyphens are allowed."
    ),
    zipCode:
      employee.zipCode.trim().length !== 5 || !/^\d{5}$/.test(employee.zipCode)
        ? "The postal code must consist of five numbers only."
        : "",
  };
};
