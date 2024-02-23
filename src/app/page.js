import styles from "./page.module.css";
import Header from "../componentes/header/Header";

export default function Home() {
  return (
    <main className={styles.container}>
      <Header />
    </main>
  );
}
