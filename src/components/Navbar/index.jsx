import styles from "./navbar.module.css";
import Link from "next/link";

import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className="container flex__space-bet ">
        <h1 className="logo">Carlos Leite</h1>
        <div className={styles.icons}>
          <Link href="/">
            <AiFillGithub />
          </Link>
          <Link href="/tickets">
            <AiFillLinkedin />
          </Link>
          <Link href="/tickets">
            <AiFillInstagram />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
