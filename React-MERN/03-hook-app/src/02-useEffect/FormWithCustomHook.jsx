import { useForm } from '../hooks/useForm';

export const FormWithCustomHook = () => {
  const {username, email, password, onInputChange} = useForm({
    username: '',
    email: '',
    password: '',
  });
  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={ username }
        onChange={onInputChange}
      />
      <input
        type="text"
        className="form-control mt-2"
        placeholder="email"
        name="email"
        value={ email }
        onChange={onInputChange}
      />
      <input
        type="text"
        className="form-control mt-2"
        placeholder="password"
        name="password"
        value={ password }
        onChange={onInputChange}
      />
    </>
  )
}
