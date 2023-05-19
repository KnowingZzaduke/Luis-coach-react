import { useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../../context/DataContext";
import { motion } from "framer-motion";
export function Modules() {
  const { courses } = useContext(DataContext);
  const { id } = useParams();
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
    <section className="section_modules-curso">
      <h2>Módulos</h2>
      <div className="content_modules">
        {courses?.map((course) => {
          if (course.id === parseInt(id)) {
            return course.modules.map((module) => (
              <motion.div
                className="module"
                key={module.id}
                initial={cardVariants.offscreen}
                whileInView={cardVariants.onscreen}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="left">
                  <h3>{module.title}</h3>
                  <p>{module.description}</p>
                </div>
                <div className="right">
                  <div className="circle"></div>
                </div>
              </motion.div>
            ));
          }
        })}
      </div>
    </section>
  );
}
