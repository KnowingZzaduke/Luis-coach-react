import { HeaderI } from "./Header";
import { DetailsCourses } from "./DetailsCourses";
import { Modules } from "./Modules";
export function Info() {
  return (
    <div className="content_info-courses">
      <HeaderI />
      <DetailsCourses/>
      <Modules />
    </div>
  );
}
