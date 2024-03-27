import { Menus, MenuItem } from "./Menus";

const CompoundComponents = () => {
  return (
    <div>
      <h1 style={{ color: "violet" }}>Compound Components</h1>
      <nav>
        <Menus>
          <MenuItem color="green">Inicio</MenuItem>
          <MenuItem color="blue">Perfil</MenuItem>
          <MenuItem color="red">Configuración</MenuItem>
        </Menus>
        <Menus>
          <MenuItem color="orange">Post</MenuItem>
          <MenuItem color="pink">Contador</MenuItem>
          <MenuItem color="yellow">Imágenes</MenuItem>
        </Menus>
        <Menus></Menus>
      </nav>
    </div>
  );
};

export default CompoundComponents;
