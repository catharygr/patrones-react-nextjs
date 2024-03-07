import ContainerPresentational from "@/app/componentes/counter/ContainerPresentational";
import styles from "./page.module.css";

export default function Container() {
  console.log("Container");
  return (
    <div className={styles.container}>
      <ContainerPresentational />
    </div>
  );
}
