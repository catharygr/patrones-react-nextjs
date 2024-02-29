import styles from "./page.module.css";
import Header from "./componentes/header/Header";
// import Hero from "./componentes/main/Hero";
// import Main from "./componentes/main/Main";
import CompoundComponents from "@/views/CompoundComponents";

export default function Home() {
  return (
    <main className={styles.container}>
      <Header />
      <CompoundComponents />

      {/* <Hero />
      <Main /> */}
    </main>
  );
}
