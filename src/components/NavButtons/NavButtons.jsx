import { Link } from "react-router-dom";
import styles from "../NavButtons/navButtons.module.css";
import PropTypes from "prop-types";

const NavButtons = ({ activePage }) => {
  return (
    <nav>
      <div className={styles.navButtons}>
        <Link to="/">
          {/* <button className={styles.navButton}>Create Employee</button> */}
          <button
            className={`${styles.navButton} ${
              activePage === "createEmployee" ? styles.activeNavButton : ""
            }`}
          >
            Create Employee
          </button>
        </Link>
        <Link to="/view-employees">
          {/* <button className={styles.navButton}>View Current Employees</button> */}
          <button
            className={`${styles.navButton} ${
              activePage === "viewEmployees" ? styles.activeNavButton : ""
            }`}
          >
            View Current Employees
          </button>
        </Link>
      </div>
    </nav>
  );
};

NavButtons.propTypes = {
  activePage: PropTypes.oneOf(["createEmployee", "viewEmployees"]).isRequired,
};

export default NavButtons;
