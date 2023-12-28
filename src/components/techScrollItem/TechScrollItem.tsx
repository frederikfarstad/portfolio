import styles from "./TechScrollItem.module.css";

interface TechScrollItemProps {
  tech: string;
}

const TechScrollItem = ({ tech }: TechScrollItemProps) => {
  return (
    <div className={styles.container}>
      <p>{tech}</p>
    </div>
  );
};

export default TechScrollItem;
