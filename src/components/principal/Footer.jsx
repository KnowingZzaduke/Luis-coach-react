import { FaYoutube, FaInstagram } from "react-icons/fa";
export function Footer() {
  return (
    <footer>
      <h2>Éxitos</h2>
      <ul>
        <li>
          <a href="#">Sobre mí</a>
        </li>
        <li>
          <a href="#">Política de privacidad</a>
        </li>
        <li>
          <a href="#">Ayuda</a>
        </li>
      </ul>
      <div className="copy">
        <p>© 2022 Luis Gabriel Buelvas Romero.</p>
        <ul>
          <li>
            <a href="#">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="#">
              <FaYoutube />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
