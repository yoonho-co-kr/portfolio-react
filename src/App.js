import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import React, { useState } from 'react';
import About from './components/about/About'
import Skills from './components/skills/Skills';
// import Services from './components/services/Services'npm i react-router-dom --save
import Portfolio from './components/porfolio/Portfolio';
import Qualification from './components/qualification/Qualification';
// import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';


function App() {
  return (
    <>
      <Header></Header>
      <main className="main">
        <Home></Home>
        <About></About>
        <Skills></Skills>
        {/* <Services></Services> */}
        <Portfolio></Portfolio>
        <Qualification></Qualification>
        {/* <Testimonials></Testimonials> */}
        <Contact></Contact>
      </main>
      <Footer></Footer>
      <ScrollUp></ScrollUp>
    </>
  );
}

export default App;
