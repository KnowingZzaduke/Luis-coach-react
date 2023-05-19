import FotoLuis from "/img/Foto-Luis Gabriel.png";
import { benefits } from "../../data/const";
import { motion } from "framer-motion";
export function HeaderI() {
  return (
    <header className="header_i">
      <div className="content_benefits">
        <div className="left">
          <h1>Beneficios</h1>
          <ul>
            {benefits.map((benefit) => (
              <motion.li
                initial={{ y: -100 }}
                animate={{ y: 2 }}
                transition={{ duration: 1 }}
                key={benefit.id}
              >
                <span>🟢</span>
                <div className="benefit">
                  <h2>{benefit.benefit}</h2>
                  <p>{benefit.description}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="right">
          <img src={FotoLuis} />
          <h3>Luis Gabriel Buelvas Romero</h3>
          <p>conferencista y coach financiero</p>
        </div>
      </div>
    </header>
  );
}
