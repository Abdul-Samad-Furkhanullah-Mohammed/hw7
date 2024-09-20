// src/SpecificVerse.jsx
import React, { useState } from 'react';

function SpecificVerse() {
  const [verse, setVerse] = useState('');
  const [reference, setReference] = useState('');
  const [input, setInput] = useState('');

  const fetchSpecificVerse = async (reference) => {
    const response = await fetch(`https://labs.bible.org/api/?passage=${reference}&type=json`);
    const data = await response.json();
    setVerse(data[0]?.text || 'Verse not found');
    setReference(`${data[0]?.bookname} ${data[0]?.chapter}:${data[0]?.verse}`);
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleButtonClick = () => {
    fetchSpecificVerse(input);
  };

  return (
    <div className="bible-container">
      <input 
        type="text" 
        value={input} 
        onChange={handleInputChange} 
        placeholder="Enter verse (e.g., John 3:16)" 
        style={{ padding: '10px', borderRadius: '5px', width: '100%', marginBottom: '15px' }} 
      />
      <div className="button-group">
        <button className="button specific-button" onClick={handleButtonClick}>
          Get Specific Verse
        </button>
      </div>
      <div className="verse-text">
        "{verse}"
      </div>
      <div className="verse-reference">
        {reference}
      </div>
    </div>
  );
}

export default SpecificVerse;
