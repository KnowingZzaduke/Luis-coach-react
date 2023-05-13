import { motion } from "framer-motion";
export function Second() {
  const benefits = [
    {
      id: 1,
      img: "/img/beneficio-1.webp",
      description: "Administra correctamente tus finanzas",
    },
    {
      id: 2,
      img: "/img/beneficio-2.webp",
      description: "Ahorra tiempo",
    },
    {
      id: 3,
      img: "/img/beneficio-3.webp",
      description: "Aprende nuevas habilidades financieras",
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
    <section className="section_benefits">
      <h2>Beneficios</h2>
      <motion.div
        className="content_benefits"
        initial={cardVariants.offscreen}
        whileInView={cardVariants.onscreen}
        viewport={{ once: true, amount: 0.4 }}
      >
        {benefits.map((bene) => (
          <motion.div className="benefit" key={bene.id} variants={cardVariants}>
            <div className="img">
              <div className="found">
                <img src={bene.img} className="img_b" />
              </div>
            </div>
            <p>{bene.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
