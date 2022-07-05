import React, { useState, useEffect, useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { GrCart } from "react-icons/gr";
import { FaUserPlus } from "react-icons/fa";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepOrange, deepPurple } from "@mui/material/colors";
import { BiLogIn, BiUserPlus } from "react-icons/bi";
import { BsCartPlusFill } from "react-icons/bs";
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import Cookies from "js-cookie";
import { ContextToal } from "./App";
const Navbar = () => {
  const navigate = useNavigate();
  const toalitem = useContext(ContextToal);
  const { totalItems } = toalitem;
  const [user, setUser] = useState(false);
  const logOut = () => {
    localStorage.removeItem("login");
    navigate("/");
  };

  useEffect(() => {
    if (localStorage.getItem("login")) {
      setUser(true);
      // loca.get('register_email')
      navigate("/");
    } else {
      setUser(false);
    }
  }, [user]);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <NavLink className="navbar-brand" to='/'>
            Shop<span className="logo_color">Now</span>
            {/* <img src="images/logo.png" alt="" className="img-fluid" /> */}
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/product">
                  Product
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">
                  Contact
                </a>
              </li>
            </ul>
            <ul className="navbar-nav  mb-2 mb-lg-0">
              <li style={{marginTop:"6px"}}>
                <Link to='/cart'
                  type="button"
                  className="btn btn-primary btn-sm position-relative m-1 rounded-pill"
                >
                  <BsCartPlusFill />
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {totalItems}
                    <span className="visually-hidden">unread messages</span>
                  </span>
                </Link>
              </li>
              {localStorage.getItem("login") ? (
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false" style={{marginTop:'-5px'}}>

                    <Stack direction="row" >
                      <Avatar sx={{ bgcolor: deepOrange[500] }}>
                        {Cookies.get("register_email").substring(0, 1)}
                      </Avatar>
                    </Stack>
                  </a>
                  <ul
                    className="dropdown-menu "
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="login_btn btn" onClick={logOut}>
                        <BiLogIn className="user_icon" /> Log Out
                      </a>
                    </li>
                  </ul>
                </li>
              ) : (
                <li className="nav-item dropdown" style={{marginTop:'-5px'}}>
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                   <Stack direction="row" >
                      <Avatar sx={{ bgcolor: deepOrange[500] }}>
                        <PersonAddAltIcon/>
                      </Avatar>
                    </Stack>
                  </a>
                  <ul
                    className="dropdown-menu "
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link className="btn" to="/register">
                        <BiUserPlus className="user_icon" /> Register
                      </Link>
                    </li>
                    <li>
                     
                      <Link className="login_btn btn" to="/login">
                        <BiLogIn className="user_icon" /> Login
                      </Link>
                    </li>
                  </ul>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
