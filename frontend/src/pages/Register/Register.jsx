import { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://shopverse-uk0y.onrender.com/api/auth/register", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const data = await response.json();

      alert(data.message);

    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="login-page">

      <form className="login-card" onSubmit={handleRegister}>

        <h1>Create Account</h1>

        <p>Join ShopVerse today.</p>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">
          Register
        </button>

        <p className="register-link">
          Already have an account?

          <Link to="/login">
            Login
          </Link>

        </p>

      </form>

    </div>
  );
}

export default Register;