import Setup from "/img/setup-formulario.webp";
import { FaUserCircle, FaUnlock, FaRegEnvelope } from "react-icons/fa";
import Checkbox from "@mui/material/Checkbox";

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
            <input type="password" placeholder="Repite tu contraseña" />
          </div>
        </div>
        <div className="input_check">
          <Checkbox checked />
          <p>
            Acepto los 
            <a href="#">terminos y condiciones</a>.
          </p>
        </div>
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
