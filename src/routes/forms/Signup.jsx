import Setup from "/img/setup-formulario.webp";
import { FaUserCircle, FaUnlock, FaRegEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
import Swal from "sweetalert2";
export function Signup() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [firtPassword, setFirtPassword] = useState('');
  const [secondPassword, setSecondPassword] = useState('');
  const navigate = useNavigate();
  function onSubmit(e) {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(user === "" || email === "" || firtPassword === "" || secondPassword === ""){
      Swal.fire({
        title: "Alerta",
        text: "Ninguno de los campos puede ir vacío",
        icon: "warning",
        heightAuto: false
      })
    }else if (!user > 4) {
      Swal.fire({
        title: "Error",
        text: "El usuario debe tener más de 4 carácteres",
        icon: "error",
        heightAuto: false,
      });
    } else if (!emailRegex.test(email)) {
      Swal.fire({
        title: "Error",
        text: "Ingresa un correo válido",
        icon: "error",
        heightAuto: false,
      });
    } else if (!firtPassword.length > 6) {
      Swal.fire({
        title: "Error",
        text: "Ingresa una contraseña más larga",
        icon: "error",
        heightAuto: false,
      });
    } else if (firtPassword !== secondPassword) {
      Swal.fire({
        title: "Error",
        text: "Las contraseñas no coinciden",
        icon: "error",
        heightAuto: false,
      });
    } else {
      navigate("/welcome");
    }
  }
  return (
    <div className="content_formulario">
      <form onSubmit={onSubmit}>
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
            <FaUserCircle />
            <input
              type="email"
              placeholder="Correo"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input">
            <FaUnlock />
            <input
              type="password"
              placeholder="Contraseña"
              onChange={(e) => setFirtPassword(e.target.value)}
            />
          </div>
          <div className="input">
            <FaUnlock />
            <input
              type="password"
              placeholder="Repite tu contraseña"
              onChange={(e) => setSecondPassword(e.target.value)}
            />
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
