import videoLogoLuis from "/video/L-video-fondo.mp4";
import LogoLuis from "/img/luis-transparent.png";
import {
  FaBars,
  FaTimesCircle,
  FaHome,
  FaBook,
  FaBookReader,
  FaPhoneAlt,
  FaExternalLinkSquareAlt,
} from "react-icons/fa";
import { useState } from "react";
import { motion } from "framer-motion";
export function Header() {
  const [menu, setMenu] = useState(false);
  function openMenu() {
    setMenu(!menu);
  }
  return (
    <header className="header_p">
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
                <a href="#courses">Cursos</a>
                <FaBook />
              </li>
              <li>
                <a href="#benefits">Beneficios</a>
                <FaBookReader />
              </li>
              <li>
                <a href="#opinions">Opiniones</a>
                <FaPhoneAlt />
              </li>
            </ul>
          </div>
        </div>
        <div className="right">
          <a href="signin">
            <button>Signin</button>
          </a>
          <a href="signup">
            <button>Signup</button>
          </a>
        </div>
        <div className="content_toggle-open-v">
          <FaBars onClick={openMenu} />
        </div>
      </nav>
      <div className="content_info">
        <div className="left">
          <h1>Luis Buelvas Conferencista & Coach Financiero </h1>
          <div className="content_start">
            <h3>
              Está página ofrece una gran variedad de cursos que orientan a las
              personas como tener libertad financiera y como lograr éxito.{" "}
            </h3>
            <div className="content_button">
              <a>
                <motion.button
                  initial={{ x: -200 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 1 }}
                >
                  Iniciar
                  <FaExternalLinkSquareAlt />
                </motion.button>
              </a>
            </div>
          </div>
        </div>
        <motion.div
          className="right"
          initial={{ opacity: 0, y: 300 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", bounce: 0.4, duration: 3 }}
        >
          <video
            src={videoLogoLuis}
            className="video_found"
            autoPlay
            loop
            muted
          />
        </motion.div>
      </div>
    </header>
  );
}
