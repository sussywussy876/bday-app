import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MobilePage from './MobilePage';
import Video from './Video';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MobilePage />} />
        <Route path="/gift-page" element={<Video />} />
      </Routes>
    </Router>
  );
};

export default App;