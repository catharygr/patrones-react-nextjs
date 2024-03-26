import { CounterComponente } from "./CounterComponente";
import styles from "./ContainerComponent.module.css";

const ContainerComponent = () => {
  return (
    <div className={styles.containerPresentational}>
      <h1>Smart/Dumb Stateful/Stateless</h1>
    </div>
  );
};

export default ContainerComponent;
