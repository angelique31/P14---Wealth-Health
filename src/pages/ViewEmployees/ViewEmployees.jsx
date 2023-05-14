import { useContext, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import EmployeeContext from "../../context/employeeContext";

import users from "../../data/mockUser";

import NavBar from "../../components/CreatEmployee/NavBar/NavBar";
import NavButtons from "../../components/CreatEmployee/NavButtons/NavButtons";

import EntriesPerPageSelect from "../../components/ViewEmployees/EntriesPerPageSelect/EntriesPerPageSelect";
import SearchBox from "../../components/ViewEmployees/SearchBox/SearchBox";

import { Container, SmallerButton } from "./ViewEmployeeStyles";

function ViewEmployees() {
  const { employees } = useContext(EmployeeContext);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [perPage, setPerPage] = useState(10);
  const [searchText, setSearchText] = useState("");
  // new state for controlling the display of mockData
  const [showMockData, setShowMockData] = useState(false);

  useEffect(() => {
    // let filtered = employees;
    let filtered = showMockData ? users : employees;

    if (searchText) {
      filtered = employees.filter((employee) =>
        Object.values(employee)
          .join(" ")
          .toLowerCase()
          .includes(searchText.toLowerCase())
      );
    }

    setFilteredEmployees(filtered.slice(0, perPage));
  }, [employees, searchText, perPage, showMockData]);

  const columns = [
    { name: "First Name", selector: "firstName" },
    { name: "Last Name", selector: "lastName" },
    { name: "Start Date", selector: "startDate" },
    { name: "Department", selector: "department" },
    { name: "Date of Birth", selector: "dateOfBirth" },
    { name: "Street", selector: "street" },
    { name: "City", selector: "city" },
    { name: "State", selector: "state" },
    { name: "Zip Code", selector: "zipCode" },
  ];

  const handleEntriesChange = (newPerPage) => {
    setPerPage(newPerPage);
  };

  const handleSearch = (newSearchText) => {
    setSearchText(newSearchText);
  };

  const subHeaderComponent = (
    <Container>
      <EntriesPerPageSelect onEntriesChange={handleEntriesChange} />
      {/* Add a button to toggle the display of mockData */}
      <SmallerButton onClick={() => setShowMockData(!showMockData)}>
        {showMockData ? "Show Sample Employees" : "Show Actual Employees"}
      </SmallerButton>
      <SearchBox onSearch={handleSearch} />
    </Container>
  );

  const noDataComponent = (
    <div
      style={{
        textAlign: "center",
        padding: "20px",
        backgroundColor: "#f5f5f5",
        borderRadius: "8px",
        marginTop: "50px",
        marginBottom: "50px",
      }}
    >
      <p style={{ fontSize: "18px", marginBottom: "10px" }}>
        🎉 Félicitations, vous avez atteint le point de départ ! 🎉
      </p>
      <p style={{ fontSize: "16px", lineHeight: "1.4" }}>
        {`Il n'y a pas encore d'employés dans notre liste. Prenez les devants et commencez à ajouter des employés pour qu'ils apparaissent ici. 😊`}
      </p>
    </div>
  );

  // personnaliser le style du subHeader de la DataTable:
  const customStyles = {
    subHeader: {
      style: {
        display: "initial", // Remplacez 'flex' par 'initial' pour réinitialiser la propriété display
      },
    },
  };

  return (
    <div>
      <NavBar />
      <NavButtons activePage="viewEmployees" />

      <DataTable
        columns={columns}
        data={filteredEmployees}
        pagination
        responsive
        highlightOnHover
        subHeader
        subHeaderComponent={subHeaderComponent}
        subHeaderAlign="right"
        noDataComponent={noDataComponent}
        customStyles={customStyles}
      />
    </div>
  );
}

export default ViewEmployees;
