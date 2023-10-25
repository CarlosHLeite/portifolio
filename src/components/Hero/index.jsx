import styles from "./hero.module.css";

const Hero = () => {
  return (
    <section className={`container ${styles.hero}`}>
      <div className={styles.firstColumn}>
        <p className={styles.subHeading}>Ola, eu sou um</p>
        <h1 className={`${styles.logo}`}>Desenvolvedor Front End</h1>

        <button className={styles.btn}>Contact Me</button>
      </div>
    </section>
  );
};

export default Hero;
