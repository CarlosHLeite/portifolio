import img from "../../../public/img/skilled.webp";
import Image from "next/image";
import styles from "./styles.module.css";
import path from "path";
const Card = ({ portifolio }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          className={styles.img}
          width={100}
          height={100}
          src={`./img/${portifolio.img}`}
        />
      </div>

      <div className={styles.cardBody}>
        <h3>{portifolio.name}</h3>

        <div className={styles.tags}>
          <p>HTML</p>
          <p>CSS</p>
        </div>

        <div className={styles.links}>
          <li>
            <a href={portifolio.demoLink} target="blank">
              VIEW PROJECT
            </a>
          </li>

          <li>
            <a href={portifolio.githubLink} target="blank">
              VIEW CODE
            </a>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Card;
