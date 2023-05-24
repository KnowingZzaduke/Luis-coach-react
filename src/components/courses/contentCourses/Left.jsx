export function Left({ course}) {
  return (
    <div className="left">
      <img src={course.img} />
      <h1>{course.name}</h1>
    </div>
  );
}
