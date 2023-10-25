import styles from "./about.module.css";

const About = () => {
  return (
    <section className={`container ${styles.container}`}>
      <div className={styles.work}>
        <h2 className={styles.header}>
          <span>///</span>Work & Experience
        </h2>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <p>2021 - 2023</p>
            <span>01</span>
          </div>

          <h3>Instituto Eldorado</h3>
          <em>Estagio Web Design</em>
        </div>
      </div>

      <div className={styles.education}>
        <h2 className={styles.header}>
          <span>///</span>Education
        </h2>

        <div className={styles.educationContainer}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <p>2021 - 2023</p>
              <span>01</span>
            </div>

            <h3>Uninter</h3>
            <em>Desenvolvimento Mobile</em>
          </div>

          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <p>2021 - 2023</p>
              <span>02</span>
            </div>

            <h3>Anhanguera</h3>
            <em>Engenharia de Software</em>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
