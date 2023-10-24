import styles from "./hero.module.css";

const Hero = () => {
  return (
    <section className={`container ${styles.hero}`}>
      <div className={styles.firstColumn}>
        <h1 className="logo">Desenvolvedor Front End</h1>
        <p>
          Based in the UK, I’m a front-end developer passionate about building
          accessible web apps that users love.
        </p>
        <button>Contact Me</button>
      </div>

      <div className="secondColumn"></div>
    </section>
  );
};

export default Hero;
