import { Menu, MenuItem } from "../app/componentes/menu/Menu";

const CompoundComponents = () => {
  return (
    <div>
      <nav>
        <h1 style={{ color: "violet" }}>Compound Components</h1>
        <Menu>
          <MenuItem color="green">Inicio</MenuItem>
          <MenuItem color="blue">Perfil</MenuItem>
          <MenuItem color="red">Configuración</MenuItem>
        </Menu>
        <Menu>
          <MenuItem color="orange">Post</MenuItem>
          <MenuItem color="pink">Contador</MenuItem>
          <MenuItem color="yellow">Imágenes</MenuItem>
        </Menu>
        <Menu>
          <MenuItem color="purple">Productos</MenuItem>
          <MenuItem color="brown">Cesta</MenuItem>
          <MenuItem color="gray">Tarjetas</MenuItem>
        </Menu>
      </nav>
    </div>
  );
};

export default CompoundComponents;
