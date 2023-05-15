import './App.css';
import React from 'react';
import Home from './Home';
import NotFound from './NotFound';
import Download from './Download';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div>
      
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/download" element={<Download />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </Router>
    </div>
  );
}


export default App;