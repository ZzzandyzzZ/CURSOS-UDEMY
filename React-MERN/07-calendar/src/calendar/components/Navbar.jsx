import { useAuthStore } from '../../auth/hooks/useAuthStore';

export function Navbar() {
  const { user: { name }, startLogout } = useAuthStore();
  return (
    <div className="navbar navbar-dark bg-dark mb-4 px-4">
      <span className="navbar-brand">
        <i className="fas fa-calendar-alt" />
        &nbsp;
        { name }
      </span>
      <button className="btn btn-outline-danger" type="button" onClick={startLogout}>
        <i className="fas fa-sign-out-alt" />
        <span>Salir</span>
      </button>
    </div>
  );
}
