import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Drink from './Drink';
import Eat from './Eat';
import Home from './Home';

function App() {
  

  return (
    <main className="App">
      <Home />  
      <Eat />  
      <Drink />  
    </main>
  );
};

export default App;
