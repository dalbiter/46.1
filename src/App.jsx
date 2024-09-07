import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Drink from './Drink';
import Eat from './Eat';
import Home from './Home';

function App() {
  

  return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home />} /> 
                <Route exact path='/eat' element={<Eat />} /> 
                <Route exact path='/drink' element={<Drink />} /> 
            </Routes>
        </BrowserRouter>
  );
};

export default App;