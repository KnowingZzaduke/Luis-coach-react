import LogoLuis from "/img/luis-transparent.png";
import {
  FaBars,
  FaTimesCircle,
  FaHome,
  FaBook,
  FaBookReader,
  FaPhoneAlt,
} from "react-icons/fa";
import { useState } from "react";
export function HeaderW() {
  const [menu, setMenu] = useState(false);
  function openMenu() {
    setMenu(!menu);
  }
  return (
    <header>
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
                <a href="#">Inicio</a>
                <FaHome />
              </li>
              <li>
                <a href="#courses">Biblioteca</a>
                <FaBook />
              </li>
              <li>
                <a href="#benefits">Asesorias</a>
                <FaBookReader />
              </li>
              <li className="button_close-sesion">
                <button>Cerrar sesión</button>
              </li>
            </ul>
          </div>
        </div>
        <div className="right v">
          <button>Cerrar sesión</button>
        </div>
        <div className="content_toggle-open-v">
          <FaBars onClick={openMenu} />
        </div>
      </nav>
    </header>
  );
}
