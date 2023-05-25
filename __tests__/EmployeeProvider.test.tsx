import { render, screen } from '@testing-library/react';
import React, { useContext } from 'react';
import EmployeeContext, { EmployeeProvider } from '../src/context/employeeContext';

const TestComponent = () => {
  const value = useContext(EmployeeContext);
  
  // Write test assertions here
  // For example:
  expect(value.employee).toEqual({
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
  expect(value.errors).toEqual({});
  expect(value.showErrors).toBe(false);
  expect(value.employees).toEqual([]);
  
  // We return null because this component doesn't render anything
  return null;
};

test('EmployeeProvider provides context with default values', () => {
  render(
    <EmployeeProvider>
      <TestComponent />
    </EmployeeProvider>
  );
  // screen.debug();
});
