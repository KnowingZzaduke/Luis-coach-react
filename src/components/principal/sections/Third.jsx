import { FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";
export function Third() {
  const opinions = [
    {
      id: 1,
      user: "Nombre usuario",
      profession: "Profesión Profesión Profesión Profesión Profesión",
      opinion: "Opinión opinión opinión opinión opinión opinión",
    },
    {
      id: 2,
      user: "Nombre usuario",
      profession: "Profesión Profesión Profesión Profesión Profesión",
      opinion: "Opinión opinión opinión opinión opinión opinión",
    },
    {
      id: 3,
      user: "Nombre usuario",
      profession: "Profesión Profesión Profesión Profesión Profesión",
      opinion: "Opinión opinión opinión opinión opinión opinión",
    },
  ];
  const cardVariants = {
    offscreen: {
      opacity: 0,
    },
    onscreen: {
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 2,
      },
    },
  };
  return (
    <section className="section_opinions" id="opinions">
      <div className="left">
        <h2>Opiniones</h2>
        <div className="content_opinions">
          {opinions.map((opinion) => (
            <motion.div
              className="opinion"
              key={opinion.id}
              initial={cardVariants.offscreen}
              whileInView={cardVariants.onscreen}
              viewport={{ one: true, amount: 0.4 }}
            >
              <h3>{opinion.user}</h3>
              <h5>{opinion.profession}</h5>
              <p>{opinion.opinion}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="right">
        <h2>Contactame</h2>
        <div className="content_form">
          <form>
            <div className="campus">
              <input type="text" placeholder="Nombre" />
            </div>
            <div className="campus">
              <input type="text" placeholder="Correo" />
            </div>
            <div className="campus">
              <textarea type="text" placeholder="Mensaje" />
            </div>
            <div className="content_button">
              <button>Enviar</button>
            </div>
          </form>
          <h3>
            Número de teléfono
            <FaPhoneAlt />
          </h3>
        </div>
      </div>
    </section>
  );
}
