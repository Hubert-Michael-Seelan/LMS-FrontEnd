import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    axios
      .post("https://librarymanagementsysytem.onrender.com/library/login", {
        email,
        password,
      })
      .then((res) => {
        if (res.data.status) {
          alert(res.data.message);
          localStorage.setItem('token',res.data.data)
          navigate('/home');
        } else {
          alert(res.data.message);
        }
      });
  };

  return (
    <div className="main bg-dark">
      <div className="nav-bar-2">
        <div className="row py-3">
          <div className="col-6">
            <h3 className="nav-bar ps-3 fs-1">Library Management</h3>
          </div>
        </div>
      </div>

      <div className="login ">
        <h3 className="mt-4 text-center">
          Login To Make your Function Great with US❤
        </h3>
        <input
          type="text"
          placeholder="Email*"
          className="d-block mt-5 ms-5 w-75 py-2 ps-3"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="text"
          placeholder="Password*"
          className="d-block mt-4 ms-5 w-75 py-2 ps-3"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn btn-success mt-5 ms-5" onClick={handleLogin}>
          Login
        </button>
        <Link to="/forgotPassword">
          <button className="btn btn-danger mt-5 ms-5">Forget Password</button>
        </Link>
        <Link to="/signup" className="d-block mt-4 ms-5 signup mb-4">
          SignUp or Create a User
        </Link>
      </div>
    </div>
  );
};

export default Login;
