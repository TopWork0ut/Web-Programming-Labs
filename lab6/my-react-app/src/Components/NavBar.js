import React from "react";
import close from "../Img/close.svg";
import menu from "../Img/menu.svg";

export default function NavBar() {
  return (
    <div class="nav-bar">
      <div class="container">
        <a class="logo-nav" href="">
          Hotel<span>Seeker</span>
        </a>
        <img id="menu-cta" class="menu-img" src={menu} alt="navigation" />
        <nav>
          <img
            id="menu-exit"
            class="menu-img-exit"
            src={close}
            alt="close navigation"
          />
          <ul class="primary-nav">
            <li class="current">
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Gallery</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
          </ul>

          <ul class="second-nav">
            <li>
              <a href="#">Contacts</a>
            </li>
            <li class="find_hotel">
              <a href="#">Find a hotel</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
