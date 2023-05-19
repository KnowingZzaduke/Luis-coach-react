import { NavbarI } from "../../components/infoCourses/Navbar";
import { Outlet } from "react-router-dom";
import { Footer } from "../../components/principal/Footer";
export function InfoCourses() {
  return (
    <div className="content_components-info-courses">
      <NavbarI />
      <Outlet />;
      <Footer />
    </div>
  );
}
