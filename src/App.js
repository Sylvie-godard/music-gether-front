import React, { Component } from 'react';
import NavBar from "./NavbarComponent/Navbar";

class App extends Component{
  render () {
    return (
        <div className="container center">
            <NavBar />
            <h1>Oui je commence à reacter haha</h1>
        </div>
    );
  }
}

export default App;
