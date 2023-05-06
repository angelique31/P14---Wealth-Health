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
      "dateOfBirth",
      employee.dateOfBirth,
      3,
      "Please enter your date of birth"
    ),
    ...validateField("startDate", employee.startDate, 3, "Please enter a date"),
    ...validateField(
      "street",
      employee.street,
      3,
      "The address must contain at least 3 characters.."
    ),
    ...validateField("city", employee.city, 3, "City is required"),
    ...validateField("state", employee.state, 2, "Please choose a State"),

    ...validateField(
      "zipCode",
      employee.zipCode,
      5,
      "Correct Zip Code is required."
    ),
    ...validateField(
      "department",
      employee.department,
      3,
      "Please choose a department"
    ),
  };
};
