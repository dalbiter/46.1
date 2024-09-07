import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Drink from './Drink';
import Eat from './Eat';
import Home from './Home';

function App() {
  const [page, setPage] = useState('home');
  
  const showPage = () => {
    if(page === 'home') return <Home />
    if(page === 'eat') return <Eat />
    if(page === 'drink') return <Drink />
  }

  return (
    <main className="App">
      <nav>
        <a onClick={() => setPage('home')}>Home </a>
        <a onClick={() => setPage('eat')}>Eat </a>
        <a onClick={() => setPage('drink')}>Drink </a>
      </nav>
      <div>
      {showPage()}
      </div>
       
    </main>
  );
};

export default App;
