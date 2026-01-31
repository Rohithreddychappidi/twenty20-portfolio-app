import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Landing() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const url = isLogin
  ? "/api/auth/login"
  : "/api/auth/register";


      const res = await axios.post(url, { email, password });

      if (isLogin) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("email", res.data.email);
        navigate("/portfolio");
      } else {
        setMessage(res.data.message);
      }

    } catch (err) {
      setMessage(err.response?.data?.message || "Error occurred");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "40px auto" }}>
      <h2>Twenty20 Systems</h2>
      <p>{isLogin ? "Login" : "Register"}</p>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        style={{ width: "100%", marginBottom: "10px" }}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        style={{ width: "100%", marginBottom: "10px" }}
      />

      <button onClick={handleSubmit} style={{ width: "100%" }}>
        {isLogin ? "Login" : "Register"}
      </button>

      {message && <p>{message}</p>}

      <p>
        {isLogin ? "New user?" : "Already registered?"}
        <button onClick={() => setIsLogin(!isLogin)} style={{ marginLeft: "5px" }}>
          {isLogin ? "Register" : "Login"}
        </button>
      </p>
    </div>
  );
}

export default Landing;
