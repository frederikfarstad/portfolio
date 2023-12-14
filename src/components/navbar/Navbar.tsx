import styles from "./Navbar.module.css";
import { elastic as Menu } from "react-burger-menu";
import MenuStyles from "./MenuStyles.ts";
import githubLogo from "../../assets/github.svg";
import linkedinLogo from "../../assets/linkedin.svg";

const Navbar = () => {
  return (
    <section className={styles.navbarWrapper}>
      <Menu styles={MenuStyles}>
        <a href="/">Home</a>
        <a href="/resume">Resume</a>
        <a href="/projects">Projects</a>
      </Menu>
      <div className={styles.socialsWrapper}>
        <a
          className={styles.logo}
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
