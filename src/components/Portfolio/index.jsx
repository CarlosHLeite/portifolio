import styles from "./styles.module.css";
import Card from "../Card";

const Portfolio = () => {
  return (
    <section className={`container ${styles.container}`}>
      <h1 className={styles.header}>Projetos</h1>

      <div className={styles.cardContainer}>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};

export default Portfolio;
