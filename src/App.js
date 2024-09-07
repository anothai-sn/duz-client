import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './imges/dusit-zoo-logo.png';

import Navbar from './components/navbar/navbar_cpnt';
import Footer from './components/footer/footer_cpnt';

import Home from './components/home/home_cpnt';
import Animals from './components/animal/animal_list_cpnt';
import About from './components/about/about_cpnt';
import Map from './components/map/map_cpnt';
import Contract from './components/contract/contract_cpnt';

function App() {
  return (
    <BrowserRouter>
      <head>
        <link rel="icon" href={Logo} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500&family=Quicksand:wght@600;700&display=swap" />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" />
      </head>
      <Navbar />
      <div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/animals" element={<Animals />} />
          <Route path="/about" element={<About />} />
          <Route path="/map" element={<Map />} />
          <Route path="/contract" element={<Contract />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
