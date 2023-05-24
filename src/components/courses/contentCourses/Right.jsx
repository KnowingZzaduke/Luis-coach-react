import { Link } from "react-router-dom";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { useState } from "react";
export function Right({ course }) {
  const [state, setState] = useState({});
  function onClick(name) {
    setState((prevState) => ({ ...prevState, [name]: !prevState[name]}));
  }
  return (
    <div className="right">
      <ul>
        {course.contenido.map((content) => (
          <li className={`li_d ${state[content.name] ? "li_v" : ""}`} key={content.id}>
            <div className="info">
              <h3>{content.title}</h3>
              <FaArrowAltCircleDown
                title="Mostrar contenido"
                onClick={() => onClick(content.name)}
              />
            </div>
            <div className="link">
              <Link to={`/contenido&cursos/${course.id}/material/video`}>
                <p>{content.description}</p>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
