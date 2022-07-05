import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import axios from "axios";
import { Api_signup } from "../api";
const Register = () => {
  const navigate = useNavigate();

  const [register, setRegister] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setRegister({ ...register, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post(`${Api_signup}`, {
        username: register.name,
        email: register.email,
        password: register.password,
      })
      .then((r) => {
        // setCookie('register', register.name, { path: '/' });
        console.log("Register Successfully");
        Cookies.set("register_name", register.name, { expires: 2 });
        Cookies.set("register_email", register.email, { expires: 2 });
        Cookies.set("register_password", register.password, { expires: 2 });
        setRegister({
          name: "",
          email: "",
          password: "",
        });
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    if (Cookies.get("register")) {
      alert("you already register login please 🤔 enter your email password");
      navigate("/login");
    }
  }, []);
  return (
    <div>
      <div className="bg">
        <div className="content">
          <div className="flex-div">
            <div className="name-content">
              <h3 className="logo">
                Shop<span>Now</span>
              </h3>
              {/* <p>Connect with friends and the world around you on Facebook.</p> */}
            </div>
            <form className="form_login" onSubmit={handleSubmit}>
              <input
                type="text"
                onChange={handleChange}
                placeholder="Enter Your Name"
                required
                name="name"
                value={register.name}
              />
              <input
                type="text"
                onChange={handleChange}
                placeholder="Email or Phone Number"
                name="email"
                required
                value={register.email}
              />
              <input
                type="password"
                onChange={handleChange}
                placeholder="Password"
                required
                name="password"
                value={register.password}
              />
              <button className="login" type="submit">
                Register
              </button>

              <hr />
              <Link className="create-account" to="/login">
                Login
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
