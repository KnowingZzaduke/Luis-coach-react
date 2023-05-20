import { useContext } from "react";
import { DataContext } from "../../../context/DataContext";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
export function HeaderL() {
  const { courses } = useContext(DataContext);

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
        <Carousel className="carousel">
          {courses.map((course) => (
            <div className="content_course" key={course.id}>
              <div className="left">
                <img src={course.img} />
              </div>
              <div className="right">
                <h2>{course.name}</h2>
                <p>{course.description}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </header>
  );
}
