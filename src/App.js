import React, { useState } from 'react';
import './App.css';
import Hero from './components/Hero/Hero';
import SocialIcons from './components/SocialIcons/SocialIcons';
import SaveContactBtn from './components/SaveContactBtn/SaveContactBtn';
import Footer from './components/Footer/Footer';
import LanguageSelector from './components/LanguageSelector/LanguageSelector';
import { bizDetails, bizDetails_En, bizDetails_He, footer } from './utils/config';

function isHebrew() {
  return /he/i.test(navigator.language);
}

function isEnglish() {
  return /en/i.test(navigator.language);
}

function detectCountry() {
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return timezone === "Asia/Jerusalem"; // If in Israel, return true
}

function App() {
  const inIsrael = detectCountry(); // No need to store it in state, it's constant
  const [businessInfo, setBusinessInfo] = useState(() => {
    // Load saved language preference or auto-detect
    const savedLanguage = localStorage.getItem('selectedLanguage');
    
    if (savedLanguage === 'he') return bizDetails_He;
    if (savedLanguage === 'en') return inIsrael ? bizDetails : bizDetails_En;
    
    // Default auto-detection
    if (isHebrew()) return bizDetails_He;
    if (isEnglish()) return inIsrael ? bizDetails : bizDetails_En;
    
    return bizDetails; // Default to Arabic
  });

  const handleLanguageChange = (language) => {
    let newBusinessInfo;
    if (language === 'he') {
      newBusinessInfo = bizDetails_He;
    } else if (language === 'en') {
      newBusinessInfo = inIsrael ? bizDetails : bizDetails_En;
    } else {
      newBusinessInfo = bizDetails;
    }

    setBusinessInfo(newBusinessInfo);
    localStorage.setItem('selectedLanguage', language); // Save user preference
  };

  return (
    <div className="App">
      <LanguageSelector onLanguageChange={handleLanguageChange} />
      <Hero bizDetails={businessInfo} />
      <SocialIcons bizDetails={businessInfo} />
      <SaveContactBtn bizDetails={businessInfo} />
      <Footer footer={footer} />
    </div>
  );
}

export default App;