import './App.scss';
import React from 'react';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App(){
  return(
    <section className="App">          
      <Header />
      <Hero />
      <Content />
      <Footer />
    </section>
  );
}

export default App;