import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/Hero/Hero";
import "./App.css";

function App() {
  const [clickedItem, setClickedItem] = useState("");

  const handleItemClick = (item) => {
    setClickedItem(item);
  };

  return (
    <>
      <Navbar selectedItem={clickedItem} setSelectedItem={handleItemClick} />
      <Hero />
    </>
  );
}

export default App;
