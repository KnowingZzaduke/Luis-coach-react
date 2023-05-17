import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import { Link } from "react-router-dom";
export function Courses() {
  const { courses } = useContext(DataContext);
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
        duration: 3,
      },
    },
  };
  return (
    <div className="content_catalogue" id="catalogo">
      <h1>Catálogo de cursos</h1>
      <div className="content_courses">
        {courses.map((course) => (
          <motion.div
            className="course"
            initial={cardVariants.offscreen}
            whileInView={cardVariants.onscreen}
            viewport={{ once: true, amount: 0.4 }}
            key={course.id}
          >
            <h2>{course.name}</h2>
            <img src={course.img} />
            <div className="content_button">
              <Link to={`/info&cursos/${course.id}`} target="_blank">
                <button>
                  Ver más detalles
                  <FaRegArrowAltCircleRight />
                </button>
              </Link>
            </div>
            <hr />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
