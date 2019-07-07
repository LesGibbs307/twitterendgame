import React, { Component } from 'react';
import './App.scss';
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { AppData } from "./components/AppData";
import { Footer } from "./components/Footer";
import ComingSoon from "./images/spiderman-poster.jpg";
import TheFallen from './components/TheFallen';

class App extends Component {
  render(){
    return (
        <section className="App">          
          <Header />
          <Hero />
          <section className="Content col-sm-12">
            <div className="container col-centered">
              <div className="twitter-feed">
                <AppData  />  
              </div>
            </div>
            <div className="related-movies">
              <div className="container">
                <h2>Movies Coming Soon!</h2>
                <div className="parent">
                  <div className="child col-sm-3">
                    <img className="img-responsive" src={ComingSoon} alt="Spiderman: Far from Home is coming out this summer!" />
                  </div>
                </div>
              </div>
            </div>
            <div className="related-movies avenge">
              <TheFallen />
            </div>
          </section>
          <Footer />
        </section>
      );
  }
}

export default App;