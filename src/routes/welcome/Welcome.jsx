import { NavbarW } from "../../components/welcome/Navbar";
import { Outlet } from "react-router-dom";
import { Footer } from "../../components/principal/Footer";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export function Welcome() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/welcome/cursos");
  }, []);

  return (
    <div className="content_components-courses">
      <NavbarW />
      <Outlet />
      <Footer />
    </div>
  );
}
