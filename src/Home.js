import React, { useEffect } from "react";
import "./Home.css";
import hero from "./images/hero.png";

function Home(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="Home">
      <img src={hero} alt="banner" />
      <div>
        <h1>Home</h1>
      </div>
    </div>
  );
}
export default Home;
