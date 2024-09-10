import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom'; 
import Drink from './Drink';
import Eat from './Eat';
import Home from './Home';
import Navbar from './Navbar';

function App() {
  

  return (
    <main className="App">
        <BrowserRouter>
            {/* <nav>
                <Link to="/">Home</Link>
                <Link to="/eat">Eat</Link>
                <Link to="/drink">Drink</Link>
            </nav> */}
            <Navbar />
            <Routes>
                <Route exact path='/' element={<Home />} /> 
                <Route exact path='/eat' element={<Eat />} /> 
                <Route exact path='/drink' element={<Drink />} /> 
            </Routes>
        </BrowserRouter>
    </main>
        
  );
};

export default App;