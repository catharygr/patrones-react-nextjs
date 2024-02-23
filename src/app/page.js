import styles from "./page.module.css";
import Header from "./componentes/header/Header";
import Hero from "./componentes/main/Hero";
import Main from "./componentes/main/Main";

export default function Home() {
  return (
    <main className={styles.container}>
      <Header />
      <Hero />
      <Main />
    </main>
  );
}
