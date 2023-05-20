import Setup from "/img/setup-formulario.webp";
import { FaUserCircle, FaUnlock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";
export function Signin() {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState(null);
  function handleSubmit(e) {
    e.preventDefault();
    //Petición
    navigate("/welcome/cursos");
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
            <input
              type="text"
              placeholder="Usuario"
              onChange={(e) => setUser(e.target.value)}
            />
          </div>
          <div className="input">
            <FaUnlock />
            <input type="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)}/>
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
