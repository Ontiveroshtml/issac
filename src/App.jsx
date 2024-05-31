
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ConceptsSection from './components/Conceptos';
import Curriculum from './components/Curriculum';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/conceptos" element={<ConceptsSection />} />
          <Route path="/curriculum" element={<Curriculum />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
