import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      const response = await fetch("http://localhost:5000/api/auth/login", {

        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          email,
          password,
        }),

      });

      const data = await response.json();

      if (response.ok) {

        localStorage.setItem("token", data.token);

        alert(data.message);

        navigate("/");

      } else {

        alert(data.message);

      }

    } catch (error) {

      alert("Server Error");

    }

  };

  return (

    <div className="login-page">

      <form className="login-card" onSubmit={handleLogin}>

        <h1>Welcome Back 👋</h1>

        <p>Login to continue shopping.</p>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">
          Login
        </button>

        <p className="register-link">

          Don't have an account?

          <Link to="/register">
            Register
          </Link>

        </p>

      </form>

    </div>

  );

}

export default Login;