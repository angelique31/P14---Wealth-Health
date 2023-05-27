import { render, screen, fireEvent} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { EmployeeProvider } from '../src/context/employeeContext';
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

  // Saisir des valeurs incorrectes dans chaque champ
  fireEvent.change(screen.getByLabelText(/First Name/i), { target: { value: 'A' } });
  fireEvent.change(screen.getByLabelText(/Last Name/i), { target: { value: 'B' } });
  fireEvent.change(screen.getByLabelText(/City/i), { target: { value: '' } });
  fireEvent.change(screen.getByLabelText(/State/i), { target: { value: '' } });
  fireEvent.change(screen.getByLabelText(/Zip code/i), { target: { value: '123' } });

  // Simulate form submission
  userEvent.click(screen.getByRole('button', { name: /save/i }));
  // Check that errors are displayed for each field
  // Use findByText instead of getByText to wait for the elements to appear.
  expect(await screen.findByText(/First name should be at least 2 characters long./i)).toBeInTheDocument();
  expect(await screen.findByText(/Last name should be at least 2 characters long./i)).toBeInTheDocument();
  expect(await screen.findByText(/The address must contain at least 3 characters./i)).toBeInTheDocument();
  expect(await screen.findByText(/City is required/i)).toBeInTheDocument();
  // Check that errors are displayed for each field
  const errorElementState = await screen.findAllByText(/Please choose a State/i);
  // Assert that there is at least one such error element
  expect(errorElementState.length).toBeGreaterThan(0);
  expect(await screen.findByText(/The postal code must consist of five numbers only./i)).toBeInTheDocument();

   // Check that errors are displayed for each field
   const errorElementsDepartment = await screen.findAllByText(/Please choose a department/i);
  
   // Assert that there is at least one such error element
   expect(errorElementsDepartment.length).toBeGreaterThan(0);
});


