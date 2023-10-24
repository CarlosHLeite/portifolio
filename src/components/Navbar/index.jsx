import styles from "./navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className="container flex__space-bet ">
        <h1 className="logo">Carlos Leite</h1>
        <div className={styles.icons}>
          <Link href="/">Icon</Link>
          <Link href="/tickets">Icon</Link>
          <Link href="/tickets">Icon</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
