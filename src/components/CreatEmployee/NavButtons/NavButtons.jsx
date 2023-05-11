import NavButtonsStyles from "./NavButtonsStyles";
import PropTypes from "prop-types";

const NavButtons = ({ activePage }) => {
  return (
    <NavButtonsStyles.NavContainer>
      <NavButtonsStyles.NavButtonsContainer>
        <NavButtonsStyles.NavButtonLink to="/">
          <NavButtonsStyles.NavButton
            className={activePage === "createEmployee" ? "activeNavButton" : ""}
          >
            Create Employee
          </NavButtonsStyles.NavButton>
        </NavButtonsStyles.NavButtonLink>
        <NavButtonsStyles.NavButtonLink to="/view-employees">
          <NavButtonsStyles.NavButton
            className={activePage === "viewEmployees" ? "activeNavButton" : ""}
          >
            View Current Employees
          </NavButtonsStyles.NavButton>
        </NavButtonsStyles.NavButtonLink>
      </NavButtonsStyles.NavButtonsContainer>
    </NavButtonsStyles.NavContainer>
  );
};

NavButtons.propTypes = {
  activePage: PropTypes.oneOf(["createEmployee", "viewEmployees"]).isRequired,
};

export default NavButtons;
