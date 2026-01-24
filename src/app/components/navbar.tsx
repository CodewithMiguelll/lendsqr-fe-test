"use client";

import Link from "next/link";
import styles from "./navbar.module.scss";
import Image from "next/image";
import Logo from "../assets/logo.png";
import { Search } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className={styles.navbar}>
        {/* Logo */}
        <div className={styles.left}>
          <Image src={Logo} width={95} height={35} alt="Lendsqr Logo" />
        </div>
        <div className={styles.center}>
          <input placeholder="Search for anything..." type="search" />
          <button className={styles.searchButton}>
            <Search />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
