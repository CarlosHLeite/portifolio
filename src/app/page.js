import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.test}>
      <h1>My home</h1>

      <Link href="/tickets">tickets</Link>

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
