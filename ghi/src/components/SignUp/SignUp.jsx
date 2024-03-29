import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import useToken from "@galvanize-inc/jwtdown-for-react";
import "./SignUp.css";

const hostURL = import.meta.env.VITE_REACT_APP_API_HOST;

const Signup = () => {
  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [score, setScore] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const { register, login, token } = useToken();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = {
        username: username,
        password: password,
        name: fullName,
        score: score,
      };
      await register(userData, `${hostURL}/api/users`);
      e.target.reset();
      console.log(token)
    setTimeout(() => {
      navigate("/");
      }, 1000);
    } catch (error) {
      setErrorMessage(
        "Please wait a few minutes or username/password was entered incorrectly"
      );
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <div className="section text-center">
          <h4 className="signup-title"> Sign Up Here! </h4>
          <form
            onSubmit={handleSubmit}
            style={{ maxWidth: "400px", maxHeight: "600px" }}
          >
            <div className="form-group">
              <input
                name="username"
                placeholder="Choose a username..."
                type="text"
                className="form-control"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <input
                name="first"
                placeholder="Full name..."
                type="text"
                className="form-control"
                onChange={(e) => {
                  setFullName(e.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <input
                name="txtpassword"
                placeholder="Set password..."
                type="txtpassword"
                className="form-control"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <button className="signup-btn" type="submit">
              Submit
            </button>
          </form>
        </div>
        <p
          href="#"
          style={{
            color: "white",
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          Already signed up?{" "}
          <a to="/login" href="#" className="form-label">
            Log in Here!
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
