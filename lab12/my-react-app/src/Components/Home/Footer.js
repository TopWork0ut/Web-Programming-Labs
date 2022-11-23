import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="container_footer">
        <ul className="footer-links">
          <li>
            <a href="#">About</a>
          </li>
          <a className="logo-foot" href="">
            Hotel<span>Seeker</span>
          </a>
          <li>
            <a href="#">Info</a>
          </li>
        </ul>
        <hr></hr>
        <div className="iot">
          <p>2022 IoT Copyright all rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
