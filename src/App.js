import "./App.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import Header from "./Header";
import Keyboard from "./Keyboard";
// import Footer from "./Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Keyboard />
    </div>
  );
}

export default App;
