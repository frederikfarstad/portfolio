import TechScroll from "../techScroll/TechScroll.tsx";
import styles from "./Technologies.module.css";

import tech from "../../assets/data/tech.json";

const Technologies = () => {
  return (
    <section className={styles.technologiesSection}>
      <div className={styles.techScrollContainer}>
        <TechScroll tech={tech.frontend} title={"Frontend"} />
        <TechScroll tech={tech.backend} title={"Backend"} />
        <TechScroll tech={tech.tools} title={"Tools"} />
      </div>
    </section>
  );
};

export default Technologies;
