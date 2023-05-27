## Faites passer une librairie jQuery vers React

![image](https://github.com/angelique31/P14---Wealth-Health/assets/93211301/e71103af-3a1f-46f8-95d9-e96d404dd1dd)

### **_Presentation_**

Conversion of Jquery plugins by React components.

The employee addition form allows for the creation of new employees by entering details such as first name, last name, date of birth, start date, address, and department. The entered information is validated, and error messages are displayed if the information is not valid.

The employee information is stored in the browser's local storage. Each time a new employee is added, they are also added to this list of employees.

The Context API is used to share data across different components. An EmployeeContext is created that manages employee-related information. It is provided by the EmployeeProvider.

The application uses React Router for routing. There are two main routes in the application: one for the employee addition form ("/") and one for viewing the list of employees ("/view-employees"). Any other route leads to a 404 page.

A modal component is used to confirm the successful addition of a new employee.

### Technologies and Dependencies

- Visual Studio code
- Javascript
- [Npm](https://www.npmjs.com/package/npm) (v8.19.2)
- [NodeJS](https://nodejs.org/en/) (v18.12.1)
- [React](https://fr.reactjs.org/) (v13.4.0)
- [React-router-dom](https://reactrouter.com/) (v6.9.0)
- [Prop-types](https://www.npmjs.com/package/prop-types)
- [Styled-Components](https://styled-components.com/)
- [Vite](https://vitejs.dev/)
- [Vitest](https://github.com/vitest-dev/vitest)

### **How to launch the frontend :**

1. Clone the project
   > **_git clone https://github.com/angelique31/P14---Wealth-Health.git_**
1. Access the project directory:
   > **_cd Wealth-Health_**
1. Install npm packages:
   > **_npm install_**
1. Then launch :
   > **_npm run dev_**
1. The front-end will be launched in
   > **_http://localhost:3000_**

### **How to Run Tests using Vitest:**

1. Ensure that you are in the project directory:
   > **_cd Wealth-Health_**
2. Run the tests using the Vitest test runner:
   > **_npm run test_**
3. Test results will be displayed in the terminal.
