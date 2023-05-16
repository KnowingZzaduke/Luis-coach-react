import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { motion } from "framer-motion";
export function Courses() {
  const courses = [
    {
      id: 1,
      img: "/img/finanza2.jpg",
      name: "Educación financiera",
    },
    {
      id: 2,
      img: "/img/finanza2.jpg",
      name: "Educación financiera",
    },
    {
      id: 3,
      img: "/img/finanza2.jpg",
      name: "Educación financiera",
    },
    {
      id: 4,
      img: "/img/finanza2.jpg",
      name: "Educación financiera",
    },
  ];

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
    <div className="content_catalogue">
      <h1>Catálogo de cursos</h1>
      <div className="content_courses">
        {courses.map((course) => (
          <motion.div
            className="course"
            initial={cardVariants.offscreen}
            whileInView={cardVariants.onscreen}
            viewport={{ once: true, amount: 0.4 }}
          >
            <h2>{course.name}</h2>
            <img src={course.img} />
            <div className="content_button">
              <button>
                Ver más detalles
                <FaRegArrowAltCircleRight />
              </button>
            </div>
            <hr />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
