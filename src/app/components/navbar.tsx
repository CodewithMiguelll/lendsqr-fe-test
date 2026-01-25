"use client";

import Link from "next/link";
import styles from "./navbar.module.scss";
import Image from "next/image";
import Logo from "@/assets/logo.png";
import { Bell, ChevronDown, Search } from "lucide-react";
import ProfileImg from '@/assets/images/count-chris-RtG1qZPYpaU-unsplash.jpg'
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className={styles.navbar}>
        {/* Logo */}
        <div className={styles.left}>
          <Image src={Logo} width={95} height={20} alt="Lendsqr Logo" />
        </div>
        {/* Search Bar */}
        <div className={styles.center}>
          <input
            className={styles.search}
            placeholder="Search for anything..."
            type="search"
          />
          <button className={styles.searchButton}>
            <Search size={20} />
          </button>
        </div>
        {/* Navigation Links */}
        <div className={styles.right}>
          <Link href="#">
            Docs
          </Link>
          <Link className={styles.navlink} href="#">
            <Bell size={20} />
          </Link>
          <div className={styles.profile}>
            <Image
              src={ProfileImg}
              width={40}
              height={40}
              alt="User profile picture"
              className={styles.profileImage}
            />
            <Link className={styles.navlink} href="#">
              Ayomide <ChevronDown size={15} />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
