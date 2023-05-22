import { NavbarC } from "../../components/courses/Navbar";
import { Outlet } from "react-router-dom";
export function Courses() {
  return (
    <div className="content_material-courses">
      <NavbarC />
      <Outlet />
    </div>
  );
}
