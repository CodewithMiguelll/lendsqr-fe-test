import Image from "next/image";
import styles from "./page.module.scss";
import { Briefcase, ChevronDown } from "lucide-react";
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
        </div>
        <div className={styles.content}></div>
      </div>
    </>
  );
}
