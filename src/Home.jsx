import React, { Component } from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import Button from "@mui/material/Button";
class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="levels">
          <Button className="btn" variant="contained">
            Easy
          </Button>
          <Button className="btn" variant="contained">
            Medium
          </Button>
          <Button className="btn" variant="contained">
            Hard
          </Button>
        </div>
      </div>
    );
  }
}

export default Home;
