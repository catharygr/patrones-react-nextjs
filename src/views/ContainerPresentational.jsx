import CounterComponente from "../componentes/counter/ CounterComponente";

export const ContainerPresentational = () => {
  return (
    <div style={{ marginBottom: "200px" }}>
      <h1 style={{ color: "#646cff" }}>Smart/Dumb Stateful/Stateless</h1>
      <CounterComponente />
    </div>
  );
};
