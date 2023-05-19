import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import { FaVectorSquare, FaShoppingCart } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export function Recomendation() {
  const { courses } = useContext(DataContext);
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
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
      {courses.map((course) => (
        <Slider className="recomended_courses">
          <div className="left">
            <img src={course.img} />
            <div className="content_button">
              <button>Ver detalles del producto</button>
              <button>
                <FaShoppingCart />
              </button>
            </div>
          </div>
          <div className="right">
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <div className="content_button">
              <button>Ver detalles del producto</button>
              <button>
                <FaShoppingCart />
              </button>
            </div>
          </div>
        </Slider>
      ))}
    </section>
  );
}
