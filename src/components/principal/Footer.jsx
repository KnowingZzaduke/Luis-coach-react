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
        <p>© 2023 Luis Gabriel Buelvas Romero.</p>
        <ul>
          <li>
            <a href="#">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UCmo9j6u3RgvChsm8j8gVJ3A"
              target="_blank"
            >
              <FaYoutube />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
