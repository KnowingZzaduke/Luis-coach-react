import { motion } from "framer-motion";
export function Firt() {
  const cursos = [
    {
      id: 1,
      img: "/img/finanza2.jpg",
      name: "Nombre de curso",
    },
    {
      id: 2,

      img: "/img/found-header.jpg",
      name: "Nombre de curso",
    },
    {
      id: 3,
      img: "/img/finanza2.jpg",
      name: "Nombre de curso",
    },
    {
      id: 4,
      img: "/img/found-header.jpg",
      name: "Nombre de curso",
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
        duration: 1,
      },
    },
  };
  return (
    <section className="section_courses" id="courses">
      <h2>Cursos</h2>
      <div className="content_cursos">
        <div className="curso">
          {cursos.map((curso) => (
            <motion.div
              className="info"
              key={curso.id}
              initial={cardVariants.offscreen}
              whileInView={cardVariants.onscreen}
              viewport={{ once: true, amount: 0.4 }}
            >
              <h3>{curso.name}</h3>
              <img src={curso.img} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
