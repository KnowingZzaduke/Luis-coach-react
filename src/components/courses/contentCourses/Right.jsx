import { Link } from "react-router-dom";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { useState } from "react";
export function Right({ course }) {
  const [click, setClick] = useState(false);
  function onMaterial() {
    setClick(!click);
  }
  return (
    <div className="right"> 
      <ul>
        <li className={`li_d ${click ? "li_v" : ""}`}>
          <div className="info">
            <h3>Sección Introducción</h3>
            <FaArrowAltCircleDown title="Mostrar contenido" onClick={onMaterial}/>
          </div>
          <div className="link">
            <Link to={`/contenido&cursos/${course.id}/material/video`}>
              <p>{course.name}</p>
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
}
