import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PetProfile from './components/petProfile';
import PetSelection from './components/petSelection';
import './styles/styles.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PetSelection />} />
        <Route path="/profile" element={<PetProfile />} />
      </Routes>
    </Router>
  );
}

export default App;


