import { useRouteError } from "react-router-dom";

export function ErrorPage() {
  const error = useRouteError();
  return (
    <div id="error_page">
      <div className="content_error-page">
        <h1>Oops!</h1>
        <p>Ha ocurrido un error inesperado</p>
        <p>
          <i>{error.status || error.message}</i>
        </p>
      </div>
    </div>
  );
}
