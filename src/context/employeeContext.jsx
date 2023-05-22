import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

/**
 * EmployeeContext est le contexte principal de l'application pour gérer les informations relatives aux employés.
 * Il utilise le EmployeeProvider pour partager ces données entre les différents composants.
 *
 * EmployeeContext is the main context of the application for handling employee-related information.
 * It uses the EmployeeProvider to share this data between different components.
 *
 * @component
 * @example
 * return (
 *   <EmployeeProvider>
 *     <App />
 *   </EmployeeProvider>
 * )
 */

const EmployeeContext = React.createContext();
export default EmployeeContext;

export function EmployeeProvider({ children }) {
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    startDate: "",
    department: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
  });

  //errors : etat qui stocke les erreurs qui peuvent survenir lors de la validation
  const [errors, setErrors] = useState({});
  // showErrors : etat qui détermine si ces erreurs doivent être affichées ou non
  const [showErrors, setShowErrors] = useState(false);

  // récupérer les employés du localStorage lors de l'initialisation
  const initialEmployees = JSON.parse(localStorage.getItem("employees")) || [];

  // gestion et mise à jour de la liste des employés
  const [employees, setEmployees] = useState(initialEmployees);

  useEffect(() => {
    // sauvegarder les employés dans le localStorage à chaque fois que employees change
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  //addEmployee ajoute un nouvel employé à la liste employees
  const addEmployee = (newEmployee) => {
    setEmployees((prevEmployees) => [...prevEmployees, newEmployee]);
  };

  const resetEmployee = () => {
    setEmployee({
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      startDate: "",
      state: "",
      street: "",
      city: "",
      zipCode: "",
      department: "",
    });
  };

  const value = {
    employee,
    setEmployee,
    employees, //etat qui stocke la liste des employés
    setEmployees, //fonction qui met à jour cette liste
    errors,
    setErrors,
    showErrors,
    setShowErrors,
    addEmployee,
    resetEmployee,
  };

  return (
    <EmployeeContext.Provider value={value}>
      {children}
    </EmployeeContext.Provider>
  );
}

EmployeeProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
