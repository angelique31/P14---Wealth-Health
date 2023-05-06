import React, { useState } from "react";
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

  const value = {
    employee,
    setEmployee,
    errors,
    setErrors,
    showErrors,
    setShowErrors,
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
