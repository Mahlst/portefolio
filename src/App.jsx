import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProjectDetail from './components/sections/ProjectDetail/ProjectDetail';
import { useScrollToSection } from './hooks/UseScrollToSection';

// Pages
import Home from './pages/Home/Home';

const App = () => {
    useScrollToSection();
  return (
      
      <main className="main">
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects/:id" element={<ProjectDetail />} />
          </Routes>
      </main>

  );
};

export default App;