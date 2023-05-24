import { Link } from "react-router-dom";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { useState } from "react";
import { FaRegCommentAlt } from "react-icons/fa";
export function Right({ course }) {
  const [state, setState] = useState({});
  function onClick(name) {
    setState((prevState) => ({ ...prevState, [name]: !prevState[name] }));
  }
  return (
    <div className="right">
      <ul>
        {course.contenido.map((content) => (
          <li
            className={`li_d ${state[content.name] ? "li_v" : ""}`}
            key={content.id}
          >
            <div className="info">
              <h3>{content.title}</h3>
              <FaArrowAltCircleDown
                title="Mostrar contenido"
                onClick={() => onClick(content.name)}
              />
            </div>
            <div className="link">
              <Link to={`/contenido&curso/${course.id}/material/${content.id}`}>
                <p>{content.description}</p>
              </Link>
            </div>
          </li>
        ))}
      </ul>
      <div className="content_comments">
        <h2>
          Ingresa tu comentario
          <FaRegCommentAlt />
        </h2>
        <form>
          <input placeholder="Comentario" />
          <div className="content_button">
            <button>Enviar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
