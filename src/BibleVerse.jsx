// src/BibleVerse.jsx
import React, { useState } from 'react';

function BibleVerse() {
  const [verse, setVerse] = useState('');
  const [reference, setReference] = useState('');

  const fetchRandomVerse = async () => {
    const response = await fetch('https://labs.bible.org/api/?passage=random&type=json');
    const data = await response.json();
    setVerse(data[0].text);
    setReference(`${data[0].bookname} ${data[0].chapter}:${data[0].verse}`);
  };

  return (
    <div className="bible-container">
      <div className="verse-text">
        {/* Show empty string initially and only show verse after button click */}
        {verse ? `"${verse}"` : ""}
      </div>
      <div className="verse-reference">
        {/* Only show reference if a verse is available */}
        {reference && reference}
      </div>
      <div className="button-group">
        <button className="button random-button" onClick={fetchRandomVerse}>
          Get Random Verse
        </button>
      </div>
    </div>
  );
}

export default BibleVerse;
