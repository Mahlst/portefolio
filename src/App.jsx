import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';

// Pages
import Home from './pages/Home';

const App = () => {
  return (
    <div className="app">
      <Header />
      
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;