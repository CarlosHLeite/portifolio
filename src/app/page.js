import Link from "next/link";
import styles from "./page.module.css";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className={styles.test}>
      <Hero />
      <div>
        <div className="card">
          <Link href="/projects/projOne">Project One</Link>
        </div>
        <div className="card">
          <Link href="/projects/projTwo">Project two</Link>
        </div>
      </div>
    </main>
  );
}
