import { Link } from 'react-router-dom';

export function Header() {
  return (
    <nav>
        <div className="historial">
          <Link to="../Pages/Historial">
            <span title="Ver Historial">📋</span>
          </Link>
        </div>
        <h1 className="center separador">Seguros del hogar 🏡</h1>
        
    </nav>
  );
}

export default Header;
