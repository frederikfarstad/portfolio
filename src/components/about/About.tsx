import { forwardRef } from "react";
import styles from "./About.module.css";

const About = forwardRef<HTMLDivElement>((_, aboutRef) => {
  return (
    <section className={styles.aboutSection} ref={aboutRef}>
      <div className={styles.about}>
        <h2>Hello!</h2>
        <p>
          I am a 22 year old Computer Science student at the Norwegian
          University of Science and Technology -{" "}
        </p>
        <i>NTNU</i>
        <p>
          {" "}
          in Trondheim, Norway. I am currently in my 3rd year of studies,
          planning to take a master's degree in Artificial Intelligence. I have
          a passion for both front-end and back-end development.
        </p>
      </div>

      <img src="img/portrait.jpg" alt="Portrait" className={styles.portrait} />
    </section>
  );
});

export default About;
