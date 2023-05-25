import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import EmployeeContext, { EmployeeProvider } from '../src/context/employeeContext';
import EmployeeForm from '../src/pages/EmployeeForm/EmployeeForm';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

test('form shows errors when fields are left empty and form is submitted', async () => {
  render(
    <EmployeeProvider>
      <Router>
          <EmployeeForm />
        </Router>
    </EmployeeProvider>
  );

  // Simulate form submission
  userEvent.click(screen.getByRole('button', { name: /save/i }));
  screen.debug();
  // Check that errors are displayed for each field
  // Use findByText instead of getByText to wait for the elements to appear.
  expect(await screen.findByText(/First name should be at least 2 characters long./i)).toBeInTheDocument();
  expect(await screen.findByText(/Last name should be at least 2 characters long./i)).toBeInTheDocument();
//   expect(await screen.findByText(/Please enter your date of birth/i)).toBeInTheDocument();
//   expect(await screen.findByText(/Please enter a date/i)).toBeInTheDocument();
  expect(await screen.findByText(/The address must contain at least 3 characters./i)).toBeInTheDocument();
  expect(await screen.findByText(/City is required/i)).toBeInTheDocument();
  expect(await screen.findByText(/Please choose a State/i)).toBeInTheDocument();
  expect(await screen.findByText(/The postal code must consist of five numbers only./i)).toBeInTheDocument();
  expect(await screen.findByText(/Please choose a department/i)).toBeInTheDocument();
});

