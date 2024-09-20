// src/App.jsx
import React from 'react';
import './App.css';
import BibleVerse from './BibleVerse';
import SpecificVerse from './SpecificVerse';

function App() {
  return (
    <div className="App">
      <h1>Bible Verse App</h1>
      <BibleVerse />
      <SpecificVerse />
    </div>
  );
}

export default App;
