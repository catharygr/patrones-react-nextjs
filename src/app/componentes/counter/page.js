import ContainerComponent from "./componentes/counter/ContainerComponent";
import styles from "./page.module.css";

export default function CounterPage() {
  console.log("Container");
  return (
    <div className={styles.container}>
      <ContainerComponent />
    </div>
  );
}
