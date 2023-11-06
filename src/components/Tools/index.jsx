import styles from "./tools.module.css";

import {
  FaReact,
  FaNode,
  FaSass,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaDocker,
} from "react-icons/fa";

import { TbBrandNextjs } from "react-icons/tb";

import {
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoFigma,
  BiLogoAws,
} from "react-icons/bi";

const Tools = () => {
  return (
    <div className="container">
      <h2 className={styles.header}>Ferramentas</h2>

      <div className={styles.card}>
        <div className={styles.icon}>
          <FaReact />
        </div>

        <div className={styles.icon}>
          <FaNode />
        </div>

        <div className={styles.icon}>
          <FaGithub />
        </div>

        <div className={styles.icon}>
          <FaSass />
        </div>

        <div className={styles.icon}>
          <TbBrandNextjs />
        </div>

        <div className={styles.icon}>
          <FaHtml5 />
        </div>

        <div className={styles.icon}>
          <FaCss3Alt />
        </div>

        <div className={styles.icon}>
          <BiLogoJavascript />
        </div>

        <div className={styles.icon}>
          <FaBootstrap />
        </div>

        <div className={styles.icon}>
          <BiLogoTypescript />
        </div>

        <div className={styles.icon}>
          <BiLogoFigma />
        </div>

        <div className={styles.icon}>
          <BiLogoAws />
        </div>

        <div className={styles.icon}>
          <FaDocker />
        </div>
      </div>
    </div>
  );
};

export default Tools;
