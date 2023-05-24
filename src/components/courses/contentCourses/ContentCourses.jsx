import { FaRegCommentAlt } from "react-icons/fa";
import { useContext } from "react";
import { DataContext } from "../../../context/DataContext";
import { useParams } from "react-router-dom";
import { Left } from "./Left";
import { Right } from "./Right";
export function ContentCourses() {
  const { courses } = useContext(DataContext);
  const { id } = useParams();
  return (
    <div className="content_courses">
      {courses.map((course) => {
        if (course.id === parseInt(id)) {
          return (
            <div className="content" key={course.id}>
              <Left course={course} id={id}/>
              <Right course={course} />
            </div>
          );
        }
      })}

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
