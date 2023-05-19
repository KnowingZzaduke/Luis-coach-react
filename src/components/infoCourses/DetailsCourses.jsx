import { useParams } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import { motion } from "framer-motion";
export function DetailsCourses() {
  const { id } = useParams();
  const { courses } = useContext(DataContext);
  return (
    <section className="section_info-curso">
      {courses?.map((course) => {
        if (course.id === parseInt(id)) {
          return (
            <div key={course.id} className="content_info">
              <div className="left" key={id}>
                <motion.img src={course.img} alt={course.title} />
                <div className="content_button">
                  <button>Comprar</button>
                </div>
              </div>
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
  );
}
