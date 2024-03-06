import { CounterComponente } from "./CounterComponente";
import styles from "./ContainerPresentational.module.css";

const ContainerComponent = () => {
  return (
    <div className={styles.containerPresentational}>
      <h1>Smart/Dumb Stateful/Stateless</h1>
      <CounterComponente />
    </div>
  );
};

export default ContainerComponent;
