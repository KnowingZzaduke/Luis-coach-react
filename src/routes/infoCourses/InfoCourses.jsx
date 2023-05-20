import { Outlet } from "react-router-dom";
import { Footer } from "../../components/principal/Footer";
export function InfoCourses() {
  return (
    <div className="content_components-info-courses">
      <Outlet />;
      <Footer />
    </div>
  );
}
