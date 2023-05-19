import LogoLuis from "/img/luis-transparent.png";
import {
  FaBars,
  FaTimesCircle,
  FaHome,
  FaBook,
  FaBookReader,
  FaPowerOff,
} from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
export function NavbarI() {
  const [menu, setMenu] = useState(false);
  function openMenu() {
    setMenu(!menu);
  }
  return (
    <nav>
      <div className="left">
        <img src={LogoLuis} />
      </div>
      <div className={`center_v ${menu ? "center_d" : ""}`}>
        <div className="content_enlaces">
          <div className="content_toggle-close">
            <h3>Cerrar</h3>
            <FaTimesCircle onClick={openMenu} />
          </div>
          <ul>
            <li>
              <Link to="/info&cursos/:id/info">Inicio</Link>
              <FaHome />
            </li>
            <li>
              <Link to="/info&cursos/:id/biblioteca">Biblioteca</Link>
              <FaBook />
            </li>
            <li>
              <a href="#benefits">Asesorias</a>
              <FaBookReader />
            </li>
            <li className="button_close-sesion">
              <a>Cerrar sesión</a>
              <FaPowerOff />
            </li>
          </ul>
        </div>
      </div>
      <div className="right v">
        <button>
          Cerrar sesión
          <FaPowerOff />
        </button>
      </div>
      <div className="content_toggle-open-v">
        <FaBars onClick={openMenu} />
      </div>
    </nav>
  );
}
