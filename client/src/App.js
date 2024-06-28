import './App.css';
import { useState } from 'react';

import Home from './components/Home';
import {BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


function App() {
  return (
    //<NewTask />
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
