import React from 'react';
import './App.css';
import Hero from './components/Hero/Hero';
import SocialIcons from './components/SocialIcons/SocialIcons';
import SaveContactBtn from './components/SaveContactBtn/SaveContactBtn';
import Footer from './components/Footer/Footer'


function App() {
  return (
    <div className="App">
      <Hero />
      <SocialIcons />
      <SaveContactBtn/>
      <div onClick={() => window.open('https://qbmedia.co.il/form')}  className="btn svc-btn" >أطلب خدمه الأن</div>
      <Footer />
    </div>
  );
}



export default App;
