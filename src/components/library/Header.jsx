import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
export function HeaderL() {
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
    <header className="headerL">
      <div className="content_background-welcome">
        <h1>Bienvenido a tu biblioteca de productos</h1>
      </div>
      <p>
        Te saluda Luis Gabriel Buelvas Romero. Para mí es un placer que te
        encuentres aquí, en la <b>biblioteca de productos</b> Aquí en la
        biblioteca de producto podrás acceder a los productos adquiridos, en la
        parte inferior encontrás recomendaciones de otros cursos que podrían ser
        de tu interés Da click en acceder a este producto para ingresa a todo el
        contenido del <b>producto adquirido.</b>
      </p>
      <hr />
      <div className="content_carousel">
        <Slider>
          {courses.map((course) => (
            <div className="content_course">
              <div className="left">
                <img src={course.img} />
              </div>
              <div className="right">
                <h2>{course.title}</h2>
                <p>{course.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </header>
  );
}
