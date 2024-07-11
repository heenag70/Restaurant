
import React from "react"; 
import "./App.css"; 
import Header from "./components/Header/Header"; 
import Navbar from "./components/Navigation/Navbar"; 
import Slider from "./components/Slider/Slider"; 

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Slider />
    </div>
  );
}

export default App;
