import React from 'react';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Header from "./Header";
import Home from './Home'
import Checkout from './Checkout';
import Login from "./Login"

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
       
        <Routes>
          <Route path="/checkout" element={<Checkout />} />

          <Route path="/Login" element={<Login />}  />

          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}



export default App;