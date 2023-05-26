import { NavbarC } from "../../components/courses/Navbar";
import { Outlet } from "react-router-dom";
import { Footer } from "../../components/principal/Footer";
export function Courses() {
  return (
    <div className="content_material-courses">
      <NavbarC />
      <Outlet />
      <Footer />
    </div>
  );
}
