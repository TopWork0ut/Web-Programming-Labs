import React, { useState } from "react";
import close from "../../Img/close.svg";
import menu from "../../Img/menu.svg";
import "../Catalog/Catalog";

const NavBar = (props) => {
  let inputHandler = (e) => {
    console.log("input");
    var lowerCase = e.target.value.toLowerCase();
    console.log(lowerCase);
    props.passInputText(lowerCase);
    props.setInputMessage();
  };

  return (
    <div className="nav-bar">
      <div className="container">
        <a className="logo-nav" href="">
          Hotel<span>Seeker</span>
        </a>
        <img id="menu-cta" className="menu-img" src={menu} alt="navigation" />
        <nav style={{ width: props.width_nav }}>
          <img
            id="menu-exit"
            className="menu-img-exit"
            src={close}
            alt="close navigation"
          />
          <ul className="primary-nav">
            <li className="current">
              <a style={{ fontWeight: props.bold_home }} href="/">
                Home
              </a>
            </li>
            <li>
              <a style={{ fontWeight: props.bold_catalog }} href="/catalog">
                Catalog
              </a>
            </li>
            <li>
              <a style={{ fontWeight: props.bold_cart }} href="/cart">
                Cart
              </a>
            </li>
          </ul>
        </nav>
        <div className="wrapper" style={{ display: props.search_in_catalog }}>
          <img
            className="search-icon"
            src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDU2Ljk2NiA1Ni45NjYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDU2Ljk2NiA1Ni45NjY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KPHBhdGggZD0iTTU1LjE0Niw1MS44ODdMNDEuNTg4LDM3Ljc4NmMzLjQ4Ni00LjE0NCw1LjM5Ni05LjM1OCw1LjM5Ni0xNC43ODZjMC0xMi42ODItMTAuMzE4LTIzLTIzLTIzcy0yMywxMC4zMTgtMjMsMjMgIHMxMC4zMTgsMjMsMjMsMjNjNC43NjEsMCw5LjI5OC0xLjQzNiwxMy4xNzctNC4xNjJsMTMuNjYxLDE0LjIwOGMwLjU3MSwwLjU5MywxLjMzOSwwLjkyLDIuMTYyLDAuOTIgIGMwLjc3OSwwLDEuNTE4LTAuMjk3LDIuMDc5LTAuODM3QzU2LjI1NSw1NC45ODIsNTYuMjkzLDUzLjA4LDU1LjE0Niw1MS44ODd6IE0yMy45ODQsNmM5LjM3NCwwLDE3LDcuNjI2LDE3LDE3cy03LjYyNiwxNy0xNywxNyAgcy0xNy03LjYyNi0xNy0xN1MxNC42MSw2LDIzLjk4NCw2eiIgZmlsbD0iIzAwMDAwMCIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K"
          />
          <input
            id="search"
            placeholder="Search"
            type="text"
            onChange={inputHandler}
            value={props.inputMessage}
          />
        </div>
      </div>
    </div>
  );
};

// const Input = (props) => {
//   return <input id="search" placeholder="Search" type="text" />;
// };

export default NavBar;
