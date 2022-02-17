import logo from "./images/p00l-glow-square.png";
import Section from "./section/Section";
import "./App.css";
import Nav from "./nav/Nav";
import About from "./pages/About";
import Shop from "./pages/Shop";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Router from "./nav/Router";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Router />;
    </DndProvider>
  );
}

export default App;
