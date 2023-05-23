import { BrowserRouter, Routes, Route } from "react-router-dom";
import { EmployeeProvider } from "./context/employeeContext";
import EmployeeForm from "./pages/EmployeeForm/EmployeeForm";
import ViewEmployees from "./pages/ViewEmployees/ViewEmployees";
import { TableHeadStyle } from "./pages/ViewEmployees/ViewEmployee.styled";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import GlobalStyles from "./assets/styles/globalStyles";

const App = () => {
  return (
    <EmployeeProvider>
      <GlobalStyles />
      <TableHeadStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EmployeeForm />} />
          <Route path="/view-employees" element={<ViewEmployees />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </EmployeeProvider>
  );
};

export default App;
