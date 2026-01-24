import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <>
    <div className={styles.page}>
      <h1 className={styles.title}>Welcome to My Next.js App</h1>
    </div>
    </>
  );
}
