import TechScrollItem from "../techScrollItem/TechScrollItem";
import styles from "./TechScroll.module.css";

interface TechScrollProps {
  tech: string[];
  title: string;
}

const TechScroll = ({ tech, title }: TechScrollProps) => {
  //give techWrapper animation duration of array length * 3s (3s per item):
  const techWrapperStyle = {
    animationDuration: `${tech.length * 3}s`,
  };

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <section className={styles.techScrollSection}>
        <div className={styles.techWrapper} style={techWrapperStyle}>
          {tech.map((techItem) => {
            return <TechScrollItem key={techItem} tech={techItem} />;
          })}
          {tech.map((techItem) => {
            return (
              <TechScrollItem key={techItem + "Duplicate"} tech={techItem} />
            );
          })}
        </div>
      </section>
    </section>
  );
};

export default TechScroll;
