import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

export const Login = () => {
  const { login, error, isLoading } = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault()
    await login(email, password);
  };

  return (
    <form className="" onSubmit={handleSubmit}>
      <h3>Log In</h3>
      <label>Email</label>
      <input type="email" onChange={(e) => setEmail(e.target.value)} />
      <label>Password</label>
      <input type="password" onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Login</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};
