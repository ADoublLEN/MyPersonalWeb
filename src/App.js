import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import MEDintro from "./routes/MEDintro";
import NLPlabintro from "./routes/NLPlabintro";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/medintro" element={<MEDintro />} />
        <Route path="/NLPlabintro" element={<NLPlabintro />} />
      </Routes>
    </div>
  );
}
