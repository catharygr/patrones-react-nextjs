import CompoundComponents from "@/views/CompoundComponents";
import ContainerPresentational from "@/views/ContainerPresentational";

export default function Counter() {
  return (
    <div className={styles.container}>
      <CompoundComponents />
      <ContainerPresentational />
    </div>
  );
}
