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
      <Footer />
    </div>
  );
}



export default App;
