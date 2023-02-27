export function Navbar() {
  return (
    <div className="navbar navbar-dark bg-dark mb-4 px-4">
      <span className="navbar-brand">
        <i className="fas fa-calendar-alt" />
        &nbsp;
        Andy
      </span>
      <button className="btn btn-outline-danger" type="button">
        <i className="fas fa-sign-out-alt" />
        <span>Salir</span>
      </button>
    </div>
  );
}
