import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { DataContext } from "../../context/DataContext";
import LogoLuis from "/img/luis-transparent.png";
import FotoLuis from "/img/Foto-Luis Gabriel.png";
import { motion } from "framer-motion";
import {
  FaBars,
  FaTimesCircle,
  FaHome,
  FaBook,
  FaBookReader,
  FaPowerOff,
} from "react-icons/fa";
import { benefits } from "../../data/const";
export function Info() {
  const { id } = useParams();
  const { courses } = useContext(DataContext);
  const [menu, setMenu] = useState(false);
  function openMenu() {
    setMenu(!menu);
  }
  const cardVariants = [
    {
      offscreen: {
        opacity: 0,
        y: 200,
      },
      onscreen: {
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          bounce: 0.4,
          duration: 3,
        },
      },
    },
  ];
  return (
    <div className="content_info-courses">
      <header className="header_i">
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
        <div className="content_benefits">
          <div className="left">
            <h1>Beneficios</h1>
            <ul>
              {benefits.map((benefit) => (
                <motion.li
                  initial={{ y: -100 }}
                  animate={{ y: 2 }}
                  transition={{ duration: 1 }}
                  key={benefit.id}
                >
                  <span>🟢</span>
                  <div className="benefit">
                    <h2>{benefit.benefit}</h2>
                    <p>{benefit.description}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="right">
            <img src={FotoLuis} />
            <h3>Luis Gabriel Buelvas Romero</h3>
          </div>
        </div>
      </header>
      <section className="section_info-curso">
        {courses?.map((course) => {
          if (course.id === parseInt(id)) {
            return (
              <div key={course.id} className="content_info">
                <motion.div
                  className="left"
                  initial={cardVariants.offscreen}
                  whileInView={cardVariants.onscreen}
                  viewport={{ once: true, amount: 0.4 }}
                  key={id}
                >
                  <img src={course.img} alt={course.title} />
                  <div className="content_button">
                    <button>Comprar</button>
                  </div>
                </motion.div>
                <div className="right">
                  <h2>{course.name}</h2>
                  <p>{course.description}</p>
                  <div className="content_button">
                    <button>Comprar</button>
                  </div>
                </div>
              </div>
            );
          } else {
            return null;
          }
        })}
      </section>
    </div>
  );
}
