import Container from "@/app/componentes/counter/Container";
import styles from "./page.module.css";

export default function CounterPage() {
  console.log("Container");
  return (
    <div className={styles.container}>
      <Container />
    </div>
  );
}
