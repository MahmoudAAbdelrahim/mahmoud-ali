import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './Navbar';
import Home from './Home';
import PageOne from './PageOne';
import PageTwo from './PageTwo';
import PageThree from './PageThree';
import PageFour from './PageFour';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
<Route path="/" element={<Home />} />
<Route path="/pageone" element={<PageOne />} />
<Route path="/pagetwo" element={<PageTwo />} />
<Route path="/pagethree" element={<PageThree />} />
<Route path="/pagefour" element={<PageFour />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
