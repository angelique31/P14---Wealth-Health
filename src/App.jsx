import { BrowserRouter, Routes, Route } from "react-router-dom";

import EmployeeForm from "./pages/EmployeeForm/EmployeeForm";
import ViewEmployees from "./pages/ViewEmployees/ViewEmployees";
import "./assets/styles/global.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EmployeeForm />} />
        <Route path="/view-employees" element={<ViewEmployees />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
