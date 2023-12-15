import HoverText from "../hovertext/Hovertext";
import styles from "./Landingpage.module.css";
import downArrow from "../../assets/downArrow.svg";

interface LandingpageProps {
  nextRef: React.RefObject<HTMLDivElement>;
}

const Landingpage = ({ nextRef }: LandingpageProps) => {
  const handleScroll = () => {
    nextRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={styles.landingSection}>
      <div className={styles.welcomeDiv}>
        <HoverText text="Welcome!" parentClass={styles.welcome} />
        <HoverText text="Frederik Farstad" parentClass={styles.name} />
        <HoverText
          text="Computer Science Student"
          parentClass={styles.student}
        />
      </div>
      <button className={styles.scrollButton} onClick={handleScroll}>
        <img src={downArrow} alt="Down arrow" className={styles.downArrow} />
      </button>
    </section>
  );
};

export default Landingpage;
