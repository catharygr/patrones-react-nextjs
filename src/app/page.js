import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.container}>
      <Link href="/counter">Counter</Link>
      <Link href="/menu">Menu</Link>
    </main>
  );
}
