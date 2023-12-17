import styles from "./Navbar.module.css";
import menuStyles from "./Menu.module.css";
import { elastic as Menu } from "react-burger-menu";
import githubLogo from "../../assets/github.svg";
import linkedinLogo from "../../assets/linkedin.svg";

const Navbar = () => {
  return (
    <section className={styles.navbarWrapper}>
      <Menu
        className={menuStyles.bmMenuWrap}
        menuClassName={menuStyles.bmMenu}
        burgerButtonClassName={menuStyles.bmBurgerButton}
        burgerBarClassName={menuStyles.bmBurgerBars}
        crossButtonClassName={menuStyles.bmCrossButton}
        crossClassName={menuStyles.bmCross}
        itemClassName={menuStyles.bmItem}
        itemListClassName={menuStyles.bmItemList}
        overlayClassName={menuStyles.bmOverlay}
        morphShapeClassName={menuStyles.bmMorphShape}
      >
        <a href="/">Home</a>
        <a href="/resume">Resume</a>
        <a href="/projects">Projects</a>
      </Menu>
      <div className={styles.socialsWrapper}>
        <a
          className={styles.button + " " + styles.logo}
          href="https://github.com/frederikfarstad"
          target="_blank"
        >
          <img src={githubLogo} alt="Github logo" />
        </a>
        <a
          className={styles.logo}
          href="https://www.linkedin.com/in/frederik-andreas-brunvoll-farstad/"
          target="_blank"
        >
          <img src={linkedinLogo} alt="Linkedin logo" />
        </a>
      </div>
    </section>
  );
};

export default Navbar;
