import { useContext, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import EmployeeContext from "../../context/employeeContext";

import users from "../../data/mockUser";

import NavBar from "../../components/CreatEmployee/NavBar/NavBar";
import NavButtons from "../../components/CreatEmployee/NavButtons/NavButtons";

import EntriesPerPageSelect from "../../components/ViewEmployees/EntriesPerPageSelect/EntriesPerPageSelect";
import SearchBox from "../../components/ViewEmployees/SearchBox/SearchBox";

import EmployeeDetailsModal from "../../components/ViewEmployees/EmployeeDetailsModal/EmployeeDetailsModal";

import { Container, SmallerButton } from "./ViewEmployeeStyles";

function ViewEmployees() {
  const { employees } = useContext(EmployeeContext);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [perPage, setPerPage] = useState(10);
  const [searchText, setSearchText] = useState("");
  // new state for controlling the display of mockData
  const [showMockData, setShowMockData] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1100);

  const [isVerySmallScreen, setIsVerySmallScreen] = useState(
    window.innerWidth < 748
  );

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1100);
      setIsVerySmallScreen(window.innerWidth < 748);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const smallScreenColumns = [
    {
      name: "Name",
      selector: (row) => `${row.firstName} ${row.lastName}`,
      sortable: true,
    },
    {
      name: "Start Date",
      selector: (row) => `${row.startDate}`,
      sortable: true,
    },
    {
      name: "Department",
      selector: (row) => `${row.department}`,
      sortable: true,
    },
    {
      name: "Date of Birth",
      selector: (row) => row.dateOfBirth,
      sortable: true,
    },
    {
      name: "City & Street",
      selector: (row) => `${row.city}, ${row.street}`,
      sortable: true,
    },
    {
      name: "State & Zip Code",
      selector: (row) => `${row.state}, ${row.zipCode}`,
      sortable: true,
    },
  ];

  const largeScreenColumns = [
    { name: "First Name", selector: (row) => row.firstName, sortable: true },
    { name: "Last Name", selector: (row) => row.lastName, sortable: true },
    {
      name: "Start Date",
      selector: (row) => `${row.startDate}`,
      sortable: true,
    },
    {
      name: "Department",
      selector: (row) => `${row.department}`,
      sortable: true,
    },
    {
      name: "Date of Birth",
      selector: (row) => row.dateOfBirth,
      sortable: true,
    },
    { name: "Street", selector: (row) => row.street, sortable: true },
    { name: "City", selector: (row) => row.city, sortable: true },
    { name: "State", selector: (row) => row.state, sortable: true },
    { name: "Zip Code", selector: (row) => row.zipCode, sortable: true },
  ];

  const handleRowClick = (row) => {
    if (!isSmallScreen) return;

    setSelectedEmployee(row);
    setModalOpen(true);
  };

  const handleIconClick = (e, row) => {
    e.stopPropagation(); // pour éviter le clic sur la ligne de la table
    setSelectedEmployee(row);
    setModalOpen(true);
  };

  const verySmallScreenColumns = [
    {
      name: "Name",
      selector: (row) => `${row.firstName} ${row.lastName}`,
      sortable: true,
    },
    { name: "Start Date", selector: (row) => row.startDate, sortable: true },
    { name: "Department", selector: (row) => row.department, sortable: true },
    {
      name: "Details",
      cell: (row) => <button onClick={(e) => handleIconClick(e, row)}></button>,
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  useEffect(() => {
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
        data={filteredEmployees}
        pagination
        responsive
        highlightOnHover
        subHeader
        subHeaderComponent={subHeaderComponent}
        subHeaderAlign="right"
        noDataComponent={noDataComponent}
        customStyles={customStyles}
        onRowClicked={handleRowClick}
        columns={
          isVerySmallScreen
            ? verySmallScreenColumns
            : isSmallScreen
            ? smallScreenColumns
            : largeScreenColumns
        }
      />
      <EmployeeDetailsModal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        employee={selectedEmployee}
      />
    </div>
  );
}

export default ViewEmployees;
