import React, { useState } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState(null);

  const handleNavLinkClick = (link) => {
    setActiveLink(link);
  };
  return (
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand" href="#" id="logo">
          XIOSA
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="#"
                id="navLink"
                className={`nav-link ${activeLink === "home" ? "active" : ""}`}
                onClick={() => {
                  handleNavLinkClick("home");
                  navigate("/");
                }}
              >
                Home
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="#"
                id="navLink"
                className={`nav-link ${activeLink === "about" ? "active" : ""}`}
                onClick={() => {
                  handleNavLinkClick("about");
                  navigate("/about");
                }}
              >
                About
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="#"
                id="navLink"
                className={`nav-link ${
                  activeLink === "services" ? "active" : ""
                }`}
                onClick={() => {
                  handleNavLinkClick("services");
                  navigate("/services");
                }}
              >
                Services
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="#"
                id="navLink"
                className={`nav-link ${
                  activeLink === "projects" ? "active" : ""
                }`}
                onClick={() => {
                  handleNavLinkClick("projects");
                  navigate("/projects");
                }}
              >
                Our Work
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="#"
                id="navLink"
                className={`nav-link ${
                  activeLink === "contact" ? "active" : ""
                }`}
                onClick={() => {
                  handleNavLinkClick("contact");
                  navigate("/contact");
                }}
              >
                Contact
              </a>
            </li>
          </ul>
          <div id="navSocialBtn">
            <button type="submit">
              Let's Chat <i class="bx bxl-whatsapp"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
