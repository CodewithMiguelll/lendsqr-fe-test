import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <>
    <div className={styles.page}>
      <h1 className={styles.title}>Welcome to Lendsqr</h1>
    </div>
    </>
  );
}
