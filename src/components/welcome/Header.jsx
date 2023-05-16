import LogoLuis from "/img/luis-transparent.png";
import Finanzas from "/img/finanzas-header.jpg";
import {
  FaBars,
  FaTimesCircle,
  FaHome,
  FaBook,
  FaBookReader,
  FaPowerOff,
  FaPuzzlePiece,
} from "react-icons/fa";
import Typed from "typed.js";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
export function HeaderW() {
  const [menu, setMenu] = useState(false);
  const name = useRef(null);
  const name2 = useRef(null);
  useEffect(() => {
    const typed = new Typed(name.current, {
      strings: ["Bienvenido 👋"],
      typeSpeed: 50,
    });

    const typed2 = new Typed(name2.current, {
      strings: [
        "Te saluda Luis Gabriel Buelvas Romero, te doy las gracias por interesarte en mis cursos, aquí encontrarás todos los cursos disponibles y toda la información relacionada con ellos.",
      ],
      typeSpeed: 50,
    });
    return () => {
      typed2.destroy();
      typed.destroy();
    };
  }, []);

  function openMenu() {
    setMenu(!menu);
  }

  const cardVariants = {
    offscreen: {
      y: 200,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 2,
      },
    },
  };
  return (
    <header className="header_w">
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
      <div className="content_welcome">
        <motion.div
          className="left"
          initial={cardVariants.offscreen}
          whileInView={cardVariants.onscreen}
          viewport={{ once: true, amount: 0.4 }}
        >
          <img src={Finanzas} />
          <div className="content_button">
            <a>
              <button>
                Ir a cursos
                <FaPuzzlePiece />
              </button>
            </a>
          </div>
        </motion.div>
        <div className="right">
          <div className="info">
            <h1 ref={name} />
            <p ref={name2} />
          </div>
          <div className="content_button">
            <a>
              <button>
                Ir a cursos
                <FaPuzzlePiece />
              </button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
