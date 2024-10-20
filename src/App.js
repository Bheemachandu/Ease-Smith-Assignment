
import React from 'react';

import {BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Home from './components/Home/index.js';
import Cart from './components/Cart/index.js';
import ThankUPage from './components/ThankUPage/index.js';

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Thank" element={<ThankUPage />} />
        </Routes>
    </Router>
  )
}

export default App
