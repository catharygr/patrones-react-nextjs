import ContainerComponent from "@/app/componentes/counter/ContainerComponent";
import styles from "./page.module.css";

export default function ContainerPresentational() {
  console.log("Container");
  return (
    <div className={styles.container}>
      <ContainerComponent />
    </div>
  );
}
