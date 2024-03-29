import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useToken from "@galvanize-inc/jwtdown-for-react";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();
  const { login } = useToken();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(username, password).then(() => {
        setTimeout(() => {
          navigate("/");
        }, 1000);
      });
    } catch (error) {
      setIsError(true);
      setErrorMessage(
        "Please wait a few minutes or username/password was entered incorrectly"
      );
      setUsername("");
      setPassword("");
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">LOGIN</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="form-group">
            <input
              name="username"
              type="text"
              placeholder="Username"
              className="form-control"
              autoComplete="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              name="password"
              type={passwordVisible ? "text" : "password"}
              placeholder="Password"
              className="form-control"
              value={password}
              style={{ marginBottom: "10px" }}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? "Hide Password" : "Show Password"}
            </button>
          </div>
          {isError && (
            <div className="alert alert-danger" role="alert">
              {errorMessage}
            </div>
          )}
          <div className="form-group">
            <button className="login-btn" type="submit" value="Login">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
