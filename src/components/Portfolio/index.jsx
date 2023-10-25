import styles from "./styles.module.css";

const Portfolio = () => {
  return (
    <section className={`container ${styles.container}`}>
      <h1 className={styles.header}>Projetos</h1>

      <div className={styles.cardContainer}>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
      </div>
    </section>
  );
};

export default Portfolio;
