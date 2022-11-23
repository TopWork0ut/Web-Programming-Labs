import React, { useEffect, useContext } from "react";
import NavBar from "./NavBar";
import Hotels from "./Hotels";
import Hero from "./Hero";
import Features from "./Features";
import Footer from "./Footer";
import { AuthContext } from "./../../Authentification";

const home_id_bold = "bold";

const Home = () => {
  const { setIsAuthentificated } = useContext(AuthContext);
  return (
    <div>
      <NavBar bold_home={home_id_bold} />
      <Hero />
      <Features />
      <Hotels />
      <Footer />
    </div>
  );
};

export default Home;
