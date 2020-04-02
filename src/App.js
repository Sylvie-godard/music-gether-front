import React, { Component } from 'react';
import NavBar from './NavbarComponent/Navbar';
import Footer from "./FooterComponent/Footer";

class App extends Component{
  render () {
    return (
        <div className=' center'>
            <NavBar />
            <Footer />
        </div>
    );
  }
}

export default App;
