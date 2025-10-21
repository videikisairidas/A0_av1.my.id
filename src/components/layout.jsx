import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../assets/css/App.min.css';

import Header from './Header'
import Footer from './Footer'

import Projects from '../pages/Projects'
import Background from '../pages/Background'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Projects />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/background" element={<Background />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);