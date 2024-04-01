import React, { useEffect, useState } from 'react';
import './App.css';
import Hero from './components/Hero/Hero';
import SocialIcons from './components/SocialIcons/SocialIcons';
import SaveContactBtn from './components/SaveContactBtn/SaveContactBtn';
import Footer from './components/Footer/Footer';
import { bizDetails, bizDetails_En, bizDetails_He, footer } from './utils/config';


function isHebrew() {
  return /he/i.test(navigator.language);
}

function isEnglish() {
  return /en/i.test(navigator.language);
}

function App() {
  let businessInfo = bizDetails; // Default to Arabic
  const [inIsrael, setInIsrael] = useState(null); // default to null until API call is complete
  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then(response => response.json())
      .then(data => {
        if (data.country === 'IL') {
          setInIsrael(true);
        } else {
          setInIsrael(false);
        }
      })
      .catch(error => console.log(error));
  }, []);

  // Render null until the API call is complete and the country is determined
  if (inIsrael === null) {
    return null;
  }

  if (isHebrew()) {
    businessInfo = bizDetails_He;
  } else if (isEnglish()) {
    inIsrael ? businessInfo = bizDetails : 
    businessInfo = bizDetails_En;
  }

  return (
    <div className="App">
      <Hero bizDetails={businessInfo} />
      <SocialIcons bizDetails={businessInfo} />
      <SaveContactBtn bizDetails={businessInfo} />
      <Footer footer={footer} />
    </div>
  );
}

export default App;
