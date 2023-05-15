// Bibliothèques externes
import { useContext, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";

// Contextes
import EmployeeContext from "../../context/employeeContext";

// Données
import users from "../../data/mockUser";

// Composants internes
import NavBar from "../../components/CreatEmployee/NavBar/NavBar";
import NavButtons from "../../components/CreatEmployee/NavButtons/NavButtons";
import EntriesPerPageSelect from "../../components/ViewEmployees/EntriesPerPageSelect/EntriesPerPageSelect";
import SearchBox from "../../components/ViewEmployees/SearchBox/SearchBox";
import EmployeeDetailsModal from "../../components/ViewEmployees/EmployeeDetailsModal/EmployeeDetailsModal";

// Styles
import {
  Container,
  SmallerButton,
  NoDataContainer,
  NoDataP,
  StyledButton,
} from "./ViewEmployeeStyles";

// Autres
import {
  smallScreenColumns,
  largeScreenColumns,
  verySmallScreenColumns,
  verySmallScreenColumnsNoDept,
} from "../../components/ViewEmployees/SizeScreenColumns/SizeScreenColumns";

function ViewEmployees() {
  /**
   * Récupère les données des employés du contexte Employee.
   */
  const { employees, setEmployees } = useContext(EmployeeContext);

  /**
   * Variables d'état pour contrôler l'affichage et la pagination des employés,
   * la recherche d'employés, l'ouverture de la modale des détails de l'employé,
   * l'employé sélectionné pour la modale, et la réactivité de l'écran.
   */
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
  const [isVeryTinyScreen, setIsVeryTinyScreen] = useState(
    window.innerWidth < 465
  );
  const navigate = useNavigate();
  /**
   * Gestionnaires d'événements pour le redimensionnement de l'écran,
   *
   */
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1100);
      setIsVerySmallScreen(window.innerWidth < 748);
      setIsVeryTinyScreen(window.innerWidth < 465);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /**
   * Gestionnaires d'événements pour filtrer les employés et choisir entre
   * le fichier mockUser ou users réel,
   */
  useEffect(() => {
    let filtered = showMockData ? users : employees;
    //gestion de la recherche d'employés
    if (searchText) {
      filtered = filtered.filter((employee) =>
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

  //gestion du clic sur une ligne du tableau
  const handleRowClick = (row) => {
    if (!isSmallScreen) return;

    setSelectedEmployee(row);
    setModalOpen(true);
  };
  //gestion du clic sur l'icône pour ouvrir la modale
  const handleIconClick = (e, row) => {
    e.stopPropagation();
    setSelectedEmployee(row);
    setModalOpen(true);
  };

  function handleClearData() {
    localStorage.removeItem("employees");
    // ou localStorage.clear(); si vous voulez effacer toutes les données
    setEmployees([]); // aussi réinitialiser l'état des employés
    navigate("/");
  }

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
    <NoDataContainer>
      <NoDataP large>
        🎉 Félicitations, vous avez atteint le point de départ ! 🎉
      </NoDataP>
      <NoDataP>
        {`Il n'y a pas encore d'employés dans notre liste. Prenez les devants et commencez à ajouter des employés pour qu'ils apparaissent ici. 😊`}
      </NoDataP>
    </NoDataContainer>
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
          isVeryTinyScreen
            ? verySmallScreenColumnsNoDept(handleIconClick)
            : isVerySmallScreen
            ? verySmallScreenColumns(handleIconClick)
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
      <StyledButton onClick={handleClearData}>Log out</StyledButton>
    </div>
  );
}

export default ViewEmployees;
