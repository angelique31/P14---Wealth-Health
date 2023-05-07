import styles from "../NavBar/navBar.module.css";

function NavBar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img
          className={styles.logoImage}
          src="/assets/logo.PNG"
          alt="logo du site"
        />
        <h1>Wealth Health</h1>
      </div>
    </nav>
  );
}

export default NavBar;
