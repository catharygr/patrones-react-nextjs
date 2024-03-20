import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.container}>
      <Link href="/menu">CompoudContainer</Link>
      <Link href="/counter">ContainerPresentational</Link>
    </main>
  );
}
