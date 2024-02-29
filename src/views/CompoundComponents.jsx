import { Menu } from "../componentes/menu/Menu";

const CompoundComponents = () => {
  return (
    <div>
      <nav>
        <h1 style={{ color: "violet" }}>Compound Components</h1>
        <Menu>
          <MenuItem color="red">Home</MenuItem>
          <MenuItem color="blue">About</MenuItem>
          <MenuItem color="green">Contact</MenuItem>
      </nav>
    </div>
  );
};

export default CompoundComponents;
