import NavBar from "../../components/NavBar/NavBar";
import NavButtons from "../../components/NavButtons/NavButtons";

const ViewEmployees = () => {
  return (
    <div>
      <NavBar />
      {/* <NavButtons /> */}
      <NavButtons activePage="viewEmployees" />
    </div>
  );
};

export default ViewEmployees;
