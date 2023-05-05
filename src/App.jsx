import { BrowserRouter, Routes, Route } from "react-router-dom";
import { EmployeeProvider } from "./context/employeeContext";
import EmployeeForm from "./pages/EmployeeForm/EmployeeForm";
import ViewEmployees from "./pages/ViewEmployees/ViewEmployees";
import "./assets/styles/global.css";

const App = () => {
  return (
    <EmployeeProvider>
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
