import img from "../../../public/assets/images/thumbnail-project-1-small.webp";
import Image from "next/image";
import styles from "./styles.module.css";

const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image className={styles.img} src={img} />
      </div>

      <div className={styles.cardBody}>
        <h3>Design Portfolio</h3>

        <div className={styles.tags}>
          <p>HTML</p>
          <p>CSS</p>
        </div>

        <div className={styles.links}>
          <li>
            <a href="#">VIEW PROJECT</a>
          </li>

          <li>
            <a href="#">VIEW CODE</a>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Card;
