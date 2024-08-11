"use client";

import Link from "next/link";
import styles from "./header.module.css";
import { BsList } from "react-icons/bs";
import { useState } from "react";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.Webinar}>
        <Link href="/">Webinar</Link>
      </div>
      <div className={styles.menu} onClick={toggleMenu}>
        <BsList />
      </div>
      <div
        className={`${styles.navlinksWrapper} ${
          menuActive ? styles.active : ""
        }`}
      >
        <ul className={styles.navlinks}>
          <Link className={styles.navlink} href="/">
            Home Page
          </Link>
          <Link className={styles.navlink} href="/Customers">
            Customers
          </Link>
          <Link className={styles.navlink} href="/About">
            About
          </Link>
          <Link className={styles.navlink} href="/Choosing">
            Choosing it
          </Link>
          <Link className={styles.navlink} href="/Helping">
            Help Center
          </Link>
          <Link className={styles.navlink} href="/Buying">
            Buy now
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
