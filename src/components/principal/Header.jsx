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
export function Header() {
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
              </li>
              <li>
                <a href="#">Cursos</a>
              </li>
              <li>
                <a href="#">Opiniones</a>
              </li>
              <li>
                <a href="#">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="right">
          <a href="#">
            <button>Signin</button>
          </a>
          <a href="#">
            <button>Signup</button>
          </a>
        </div>
        <div className="content_toggle-open-v">
          <FaBars onClick={openMenu} />
        </div>
      </nav>
      <div className="info">
        <div className="left">
          <h1>Luis Buelvas Conferencista & Coach Financiero </h1>
        </div>
        <div className="content_start">
          <h3>
            Está página ofrece una gran variedad de cursos que orientan a las
            personas como tener libertad financiera y como lograr éxito.{" "}
          </h3>
          <div className="content_button"></div>
        </div>
      </div>
    </header>
  );
}