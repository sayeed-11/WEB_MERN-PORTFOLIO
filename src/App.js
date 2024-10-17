import React, { useState } from "react";
import Home from "./Components/fonts/Home";
import About from "./Components/fonts/About";
import Projects from "./Components/fonts/Projects";

function App() {
  const [isDark, setDark] = useState(false);
  return (
    <div className={`${isDark ? "dark bg-black" : "bg-white"}`}>
      <Home isDark={isDark} setDark={setDark}/>
      <About isDark={isDark}/>
      <Projects isDark={isDark}/>
    </div>
  );
}

export default App;
