import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { useContext, useState, useEffect } from "react";
import { DataContext } from "../../../context/DataContext";
import { FaVectorSquare, FaShoppingCart } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
export function Recomendation() {
  const { courses } = useContext(DataContext);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    // Configura el temporizador para cambiar la diapositiva cada 5 segundos (5000 ms)
    const timer = setInterval(() => {
      // Calcula el índice de la siguiente diapositiva
      const nextSlide = (activeSlide + 1) % 3;
      setActiveSlide(nextSlide);
    }, 5000);

    // Limpia el temporizador al desmontar el componente
    return () => clearInterval(timer);
  }, [activeSlide]);
  return (
    <section className="section_recomendation-courses">
      <div className="info">
        <h2>
          Catálogo de cursos
          <FaVectorSquare />
        </h2>
        <p>
          Aquí veras diferentes productos que posiblemente sean de tu interés,
          los cuales podrás adquirir y complementar tu biblioteca con el
          objetivo de ampliar tus conocimientos de tal manera que seas mejor
          cada día. Échale un vistazo y ordénalos para llevar tu vida al
          siguiente nivel:
        </p>
      </div>
      <hr />
      <Carousel
        className="recomended_courses"
        selectedItem={activeSlide}
        emulateTouch
        autoPlay
        infiniteLoop
      >
        {courses.map((course) => (
          <div className="courses" key={course.id}>
            <div className="left">
              <img src={course.img} />
              <div className="content_button">
                <button>Ver detalles del producto</button>
                <button title="comprar curso">
                  <FaShoppingCart />
                </button>
              </div>
            </div>
            <div className="right">
              <h2>{course.name}</h2>
              <p>{course.description}</p>
              <div className="content_button">
                <Link to={`/info&cursos/${course.id}/info`}>
                  <button>
                    Ver más detalles
                    <FaRegArrowAltCircleRight />
                  </button>
                </Link>{" "}
                <button title="comprar curso">
                  <FaShoppingCart />
                </button>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
}
