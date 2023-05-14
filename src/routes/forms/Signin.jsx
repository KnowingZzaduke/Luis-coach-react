import Setup from "/img/setup-formulario.webp";
import { FaUserCircle, FaUnlock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
export function Signin() {
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    navigate("/welcome");
  }
  return (
    <div className="content_formulario">
      <form onSubmit={handleSubmit}>
        <div className="content_img">
          <img src={Setup} />
        </div>
        <div className="inputs">
          <div className="input">
            <FaUserCircle />
            <input type="text" placeholder="Usuario" />
          </div>
          <div className="input">
            <FaUnlock />
            <input type="password" placeholder="Contraseña" />
          </div>
        </div>
        <div className="content_button">
          <button>Iniciar sesión</button>
        </div>
        <div className="text">
          <a href="signup">No tienes cuenta? Signup</a>
        </div>
      </form>
    </div>
  );
}
