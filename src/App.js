import React, { useState, useEffect } from "react";
import Welcome from "./components/Welcome/Welcome";
import Empty from "./components/Empty/Empty";
import Middle from "./components/Middle/Middle";
import Bottom from "./components/Bottom/Bottom";
import { ReactComponent as Rocket } from "./assets/rocket.svg";
import "./App.css";

function App() {
  const [niggawork, setniggawork] = useState(0);

  useEffect(() => {
    const ok = () => {
      const winHeight = window.innerHeight;
      const docHeight = document.body.clientHeight;
      const scrollTop = window.pageYOffset;
      const scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;
      setniggawork(scrollPercent);
    };

    window.addEventListener("scroll", ok);
    return () => {
      window.removeEventListener("scroll", ok);
    };
  }, []);

  return (
    <div className="app-container">
      <Welcome />
      <Empty />
      <Middle />
      <Bottom />
      <Rocket
        className="rocket-icon"
        style={{ "--scrollPercentage": niggawork }}
      />
    </div>
  );
}

export default App;
