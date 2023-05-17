import { motion } from "framer-motion";
import { useContext } from "react";
import { DataContext } from "../../../context/DataContext";
export function Firt() {
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
        duration: 1,
      },
    },
  };
  return (
    <section className="section_courses" id="courses">
      <h2>Cursos</h2>
      <div className="content_cursos">
        <div className="curso">
          {courses.map((course) => (
            <motion.div
              className="info"
              key={course.id}
              initial={cardVariants.offscreen}
              whileInView={cardVariants.onscreen}
              viewport={{ once: true, amount: 0.4 }}
            >
              <h3>{course.name}</h3>
              <img src={course.img} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
