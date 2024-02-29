import { Menu, MenuItem } from "../componentes/menu/Menu";

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
      </nav>
    </div>
  );
};

export default CompoundComponents;
