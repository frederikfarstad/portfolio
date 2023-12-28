import Navbar from "../components/navbar/Navbar";
import styles from "./FallbackPage.module.css";

function FallbackPage() {
  return (
    <>
      <Navbar />

      <h1 className={styles.notFound}>404 not found</h1>
    </>
  );
}

export default FallbackPage;
