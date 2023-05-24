import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaRegCommentAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
export function Left({ course }) {
  const { id2 } = useParams();
  const content = course.contenido.find((content) => content.id === id2);
  const navigate = useNavigate();
  useEffect(() => {
    navigate(`/contenido&curso/${course.id}/material/1/`);
  }, []);
  return (
    <div className="left">
      {content && (
        <>
          <img src={content.img} />
          <h1>{content.title}</h1>
          <div className="content_comments">
            <h2>
              Ingresa tu comentario
              <FaRegCommentAlt />
            </h2>
            <form>
              <input placeholder="Comentario" />
              <div className="content_button">
                <button>Enviar</button>
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
}
