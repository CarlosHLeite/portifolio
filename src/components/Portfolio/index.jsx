"use client";

import styles from "./styles.module.css";
import Card from "../Card";

import { DATA } from "../../../database";
import { useState } from "react";

const Portfolio = () => {
  const [portfolioData, setPortfolioData] = useState(DATA);

  return (
    <section className={`container ${styles.container}`}>
      <h1 className={styles.header}>Projetos</h1>

      <div className={styles.cardContainer}>
        {portfolioData.map((portItem) => (
          <Card key={portItem.id} portifolio={portItem} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
