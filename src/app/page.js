import Link from "next/link";
import styles from "./page.module.css";
import Hero from "@/components/Hero";
import About from "@/components/About/";
import Tools from "@/components/Tools";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className={styles.test}>
      <div className={styles.hero}>
        <Hero />
      </div>
      <About />
      <Tools />
      <Navbar />
    </main>
  );
}
