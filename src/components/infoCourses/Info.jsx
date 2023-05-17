import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { DataContext } from "../../context/DataContext";
import LogoLuis from "/img/luis-transparent.png";
import FotoLuis from "/img/Foto-Luis Gabriel.png";
import {
  FaBars,
  FaTimesCircle,
  FaHome,
  FaBook,
  FaBookReader,
  FaPowerOff,
} from "react-icons/fa";
export function Info() {
  const { id } = useParams();
  const { courses } = useContext(DataContext);
  const [menu, setMenu] = useState(false);
  const course = courses.find((course) => course.id === parseInt(id));
  function openMenu() {
    setMenu(!menu);
  }
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
              <li>
                <h2>Asesorías</h2>
                <p>
                  Obtén asesorías personalizadas sobre dudas surgidas durante el
                  proceso de formación.
                </p>
              </li>
              <li>
                <h2>Acceso de por vida</h2>
                <p>Tendrás acceso al curso de por vida.</p>
              </li>
              <li>
                <h2>Acceso a eventos</h2>
                <p>
                  Obtienes acceso a eventos relacionados con la superación
                  personal y de como alcanzar el éxito.
                </p>
              </li>
              <li>
                <h2>Recibirás actualizaciones</h2>
                <p>Recibirás actualizaciones de los cursos adquiridos.</p>
              </li>
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
              <>
                <div className="left" key={course.id}>
                  <img src={course.img} alt={course.title} />
                </div>
                <div className="right">
                  <h2>{course.name}</h2>
                  <p>{course.description}</p>
                  <div className="content_button">
                    <button>Comprar</button>
                  </div>
                </div>
              </>
            );
          } else {
            return null;
          }
        })}
      </section>
    </div>
  );
}
