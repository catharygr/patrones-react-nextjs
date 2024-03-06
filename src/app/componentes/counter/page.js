import styles from "./page.module.css";
import CompoundComponents from "@/views/CompoundComponents";
import ContainerPresentational from "@/views/ContainerPresentational";

export default function Home() {
  return (
    <main className={styles.container}>
      <CompoundComponents />
      <ContainerPresentational />
    </main>
  );
}
