import React from 'react';
import { Routes, Route } from 'react-router-dom';

import ProjectDetail from './components/sections/ProjectDetail/ProjectDetail';
import Project from './pages/Project/Project'

// Pages
import Home from './pages/Home/Home';

const App = () => {
  return (
      
      <main className="main">
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Project />} />
              <Route path="/projects/:id" element={<ProjectDetail />} />
          </Routes>
      </main>

  );
};

export default App;