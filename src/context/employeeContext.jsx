import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

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

  const [errors, setErrors] = useState({});
  const [showErrors, setShowErrors] = useState(false);

  // récupérer les employés du localStorage lors de l'initialisation
  const initialEmployees = JSON.parse(localStorage.getItem("employees")) || [];

  // gestion et mise à jour de la liste des employés
  const [employees, setEmployees] = useState(initialEmployees); //crée un état pour stocker la liste des employés

  useEffect(() => {
    // sauvegarder les employés dans le localStorage à chaque fois que 'employees' change
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  //addEmployee met à jour l'état des employés en ajoutant le nouvel employé (newEmployee) à la fin de la liste.
  const addEmployee = (newEmployee) => {
    setEmployees((prevEmployees) => [...prevEmployees, newEmployee]);
  };

  // EmployeeContext.js
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
    employees, //la liste des employés
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

// la prop children est défini comme étant soit un seul nœud React (PropTypes.node)
//soit un tableau de nœuds React (PropTypes.arrayOf(PropTypes.node)). Cette définition est assez flexible et couvrira la plupart des cas d'utilisation.
EmployeeProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
