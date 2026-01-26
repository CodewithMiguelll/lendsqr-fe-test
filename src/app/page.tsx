import Image from "next/image";
import styles from "./page.module.scss";
import { Briefcase, ChevronDown, House, Users } from "lucide-react";
import { Work_Sans } from "next/font/google";
import Link from "next/link";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})
export default function Home() {
  return (
    <>
      <div className={`${workSans.className} ${styles.page}`}>
        <div className={styles.sidebar}>
          <div className={styles.sidebarHeader}>
            <Briefcase size={24} />
            <span>Switch Organization</span>
            <ChevronDown size={16} />
          </div>
          <div className={styles.dashboard}>
            <House size={24} /> <span>Dashboard</span>
          </div>
          <div className={styles.sidebarMenu}>
            <h4>Customers</h4>
            <ul>
              <li>
                <Link className={styles.customersNav} href="#">
                  <span>
                    <Users size={16} />
                  </span>{" "}
                  Users
                </Link>
              </li>
              <li>
                {" "}
                <span></span>
                <Link className={styles.customersNav} href="#">
                  Guarantors
                </Link>
              </li>
              <li>
                {" "}
                <span></span>
                <Link className={styles.customersNav} href="#">
                  Loans
                </Link>
              </li>
              <li>
                {" "}
                <span></span>
                <Link className={styles.customersNav} href="#">
                  Decision Models
                </Link>
              </li>
              <li>
                {" "}
                <span></span>
                <Link className={styles.customersNav} href="#">
                  Savings
                </Link>
              </li>
              <li>
                {" "}
                <span></span>
                <Link className={styles.customersNav} href="#">
                  Loan Requests
                </Link>
              </li>
              <li>
                {" "}
                <span></span>
                <Link className={styles.customersNav} href="#">
                  Whitelist
                </Link>
              </li>
              <li>
                {" "}
                <span></span>
                <Link className={styles.customersNav} href="#">
                  Karma
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.content}></div>
      </div>
    </>
  );
}
