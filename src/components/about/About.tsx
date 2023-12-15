import { forwardRef } from "react";
import styles from "./About.module.css";

const About = forwardRef<HTMLDivElement>((_, aboutRef) => {
  return <section className={styles.testAboutSection} ref={aboutRef}></section>;
});

export default About;
