import Nav from "./Nav";
import About from "../pages/About";
import Shop from "../pages/Shop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
