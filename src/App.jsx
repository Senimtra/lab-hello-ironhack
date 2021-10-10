import React, { Component } from "react";
import "./App.scss";
import Sections from "./components/Sections";

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <div id="hero-section">
            <img src="./images/ironhack-logo.svg" alt="ironhack-logo" />
            <div id="message">
              <h1>Say hello to ReactJS</h1>
              <p>
                You will learn a Frontend framework from scratch, to become a
                Ninja Developer.
              </p>
            </div>
            <button>Awesome!</button>
          </div>
          <div>
            <img src="./images/menu-top.svg" alt="menu-top" />
          </div>
          <img
            id="logo-1"
            class="react-logo"
            src="./images/react-logo.svg"
            alt="react-logo"
          />
          <img
            id="logo-2"
            class="react-logo"
            src="./images/react-logo.svg"
            alt="react-logo"
          />
          <img
            id="logo-3"
            class="react-logo"
            src="./images/react-logo.svg"
            alt="react-logo"
          />
          <img
            id="logo-4"
            class="react-logo"
            src="./images/react-logo.svg"
            alt="react-logo"
          />
          <img
            id="logo-5"
            class="react-logo"
            src="./images/react-logo.svg"
            alt="react-logo"
          />
          <img
            id="logo-6"
            class="react-logo"
            src="./images/react-logo.svg"
            alt="react-logo"
          />
        </main>
        <Sections />
      </div>
    );
  }
}

export default App;
