import "./App.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import Header from "./Header";
import Keyboard from "./Keyboard";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import Quiz from "./Quiz";
import Combine from "./Combine";
// import Footer from "./Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Combine />} />
      </Routes>
      {/* <Keyboard /> */}
    </div>
  );
}

export default App;
