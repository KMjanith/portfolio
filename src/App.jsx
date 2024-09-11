import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/Hero/Hero";
import "./App.css";
import { Projects } from "./components/projects/Projects";

function App() {
  const [clickedItem, setClickedItem] = useState("");

  const handleItemClick = (item) => {
    setClickedItem(item);
  };

  return (
    <>
      <div className="quarter-circle-1"></div>
      <div className="quarter-circle-2"></div>
      <Navbar selectedItem={clickedItem} setSelectedItem={handleItemClick} />
      <Hero />
      <div className="devider"></div>
      <Projects />
      <div className="devider"></div>
      <Projects />
      <div className="devider"></div>
      <Projects />
    </>
  );
}

export default App;
