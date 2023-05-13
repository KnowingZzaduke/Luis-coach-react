import Setup from "/img/setup-formulario.webp";
import { FaUserCircle, FaUnlock, FaRegEnvelope } from "react-icons/fa";
export function Signup() {
  return (
    <div className="content_formulario">
      <form>
        <div className="content_img">
          <img src={Setup} />
        </div>
        <div className="inputs">
          <div className="input">
            <FaUserCircle />
            <input type="text" placeholder="Usuario" />
          </div>
          <div className="input">
            <FaUserCircle />
            <input type="email" placeholder="Correo" />
          </div>
          <div className="input">
            <FaUnlock />
            <input type="password" placeholder="Contraseña" />
          </div>
          <div className="input">
            <FaUnlock />
            <input type="password" placeholder="Contraseña" />
          </div>
        </div>
        <input type="checkbox"/>
        <div className="content_button">
          <button>Registrarme</button>
        </div>
        <div className="text">
          <a href="signin">Tienes cuenta? Signin</a>
        </div>
      </form>
    </div>
  );
}
