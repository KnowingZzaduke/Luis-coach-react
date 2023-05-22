import { FaRegCommentAlt, FaArrowAltCircleDown } from "react-icons/fa";
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
export function ContentCourses() {
  const { courses } = useContext(DataContext);
  const {id} = useParams();
   return (
    <div className="content_courses">
      <div className="content">
        <div className="left">
          <img />
          <h2>Introducción</h2>
        </div>
        <div className="right">
          <ul>
            {courses?.map((course) => (
              <li>
                <div className="info">
                  <h3>Sección Introducción</h3>
                  <FaArrowAltCircleDown />
                </div>
                <Link to={`/contenido&cursos/${course.id}`}>
                  <p>{course.name}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="content_commentary">
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
