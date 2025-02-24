// LanguageSelector.js
import React, { useState } from 'react';
import './LanguageSelector.css'

function LanguageSelector({ onLanguageChange }) {
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const handleLanguageChange = (event) => {
    const language = event.target.value;
    setSelectedLanguage(language);
    onLanguageChange(language);
  };

  return (
    <div className="language-selector">
      <select value={selectedLanguage} onChange={handleLanguageChange}>
        <option value="">השפה | اللغه</option>
        <option value="ar">عربي</option>
        <option value="he">עברית</option>
        <option value="en">English</option>
      </select>
    </div>
  );
}

export default LanguageSelector;