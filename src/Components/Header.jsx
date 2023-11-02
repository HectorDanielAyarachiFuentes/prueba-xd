import { Historial } from "../Pages/Historial";

export function Header() {
  return (
    <nav>
      <div className="historial">
        <a href="Historial.html">
          <Historial />
          <span title="Ver Historial">📋</span>
        </a>
      </div>
      <h1 className="center separador">Seguros del hogar 🏡</h1>
    </nav>
  );
}

export default Header;