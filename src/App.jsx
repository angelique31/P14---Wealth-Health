import { BrowserRouter, Routes, Route } from "react-router-dom";
import { EmployeeProvider } from "./context/employeeContext";
import EmployeeForm from "./pages/EmployeeForm/EmployeeForm";
import ViewEmployees from "./pages/ViewEmployees/ViewEmployees";
import "./assets/styles/global.css";
import { TableHeadStyle } from "./pages/ViewEmployees/ViewEmployeeStyles";

const App = () => {
  return (
    <EmployeeProvider>
      <TableHeadStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EmployeeForm />} />
          <Route path="/view-employees" element={<ViewEmployees />} />
        </Routes>
      </BrowserRouter>
    </EmployeeProvider>
  );
};

export default App;
