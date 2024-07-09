import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import ConceptsSection from './components/Conceptos';
import Curriculum from './components/Curriculum';
import Login from './components/login';
import Calculadoras from './components/calculadoras';
import EfectividadCotidiana from './components/calculadoras';
import EfectividadEficienciaEficacia from './components/calculadoras';
import Produccion from './components/calculadoras';
import ROI from './components/calculadoras'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
    console.log('User is authenticated');
  };

  return (
    <Router basename="/parcial_2">
      <div className="App">
        {isAuthenticated && <Navbar />}
        <Routes>
          <Route 
            path="/" 
            element={<Navigate to="/login" />} 
          />
          <Route 
            path="/login" 
            element={isAuthenticated ? <Navigate to="/conceptos" /> : <Login onLogin={handleLogin} />} 
          />
          <Route 
            path="/conceptos" 
            element={isAuthenticated ? <ConceptsSection /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/curriculum" 
            element={isAuthenticated ? <Curriculum /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/calculadoras" 
            element={isAuthenticated ? <Calculadoras /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/calculadoras/efectividad_cotidiana" 
            element={isAuthenticated ? <EfectividadCotidiana /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/calculadoras/efectividad_eficiencia_eficacia" 
            element={isAuthenticated ? <EfectividadEficienciaEficacia /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/calculadoras/produccion" 
            element={isAuthenticated ? <Produccion /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/calculadoras/roi" 
            element={isAuthenticated ? <ROI /> : <Navigate to="/login" />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
