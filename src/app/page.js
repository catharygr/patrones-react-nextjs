import styles from "./page.module.css";
import Header from "./componentes/header/Header";
import CompoundComponents from "@/views/CompoundComponents";
import ContainerPresentational from "@/views/ContainerPresentational";

export default function Home() {
  return (
    <main className={styles.container}>
      <Header />
      <CompoundComponents />
      <ContainerPresentational />
    </main>
  );
}
