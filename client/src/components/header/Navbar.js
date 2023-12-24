import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
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
              <a class="nav-link active" aria-current="page" href="#" id="navLink">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#" id="navLink">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#" id="navLink">
                Services
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#" id="navLink">
                Our Work
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#" id="navLink">
                Contact
              </a>
            </li>
          </ul>
          <div id="navSocialBtn">
            {/* <div id="socialIcons">
              <i class="bx bxl-facebook-circle"></i>
              <i class="bx bxl-instagram"></i>
            </div> */}
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
