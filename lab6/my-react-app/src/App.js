import "./App.css";

import NavBar from "./Components/NavBar";
import People from "./Components/People";
import Contacts from "./Components/Contacts";
import Hero from "./Components/Hero";
import Features from "./Components/Features";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Features />
      <People />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
