import Finanzas from "/img/finanzas-header.jpg";
import { FaPuzzlePiece } from "react-icons/fa";
import Typed from "typed.js";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
export function HeaderW() {
  const [menu, setMenu] = useState(false);
  const name = useRef(null);
  const name2 = useRef(null);
  useEffect(() => {
    const typed = new Typed(name.current, {
      strings: ["Bienvenido 👋"],
      typeSpeed: 50,
    });

    const typed2 = new Typed(name2.current, {
      strings: [
        "Te saluda Luis Gabriel Buelvas Romero, te doy las gracias por interesarte en mis cursos, aquí encontrarás todos los cursos disponibles y toda la información relacionada con ellos.",
      ],
      typeSpeed: 50,
    });
    return () => {
      typed2.destroy();
      typed.destroy();
    };
  }, []);

  function openMenu() {
    setMenu(!menu);
  }

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
        duration: 2,
      },
    },
  };
  return (
    <header className="header_w">
      <div className="content_welcome">
        <motion.div
          className="left"
          initial={cardVariants.offscreen}
          whileInView={cardVariants.onscreen}
          viewport={{ once: true, amount: 0.4 }}
        >
          <img src={Finanzas} />
          <div className="content_button">
            <a href="#catalogo">
              <button>
                Ir a cursos
                <FaPuzzlePiece />
              </button>
            </a>
          </div>
        </motion.div>
        <div className="right">
          <div className="info">
            <h1 ref={name} />
            <p ref={name2} />
          </div>
          <div className="content_button">
            <a href="#catalogo">
              <button>
                Ir a cursos
                <FaPuzzlePiece />
              </button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
