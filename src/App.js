import React from 'react';
import Navbar from './components/Navbar';
import HomepageHero from './components/HomepageHero';
import HomepageAboutUs from './components/HomepageAboutUs';
import HomepageSomeOtherInfo from './components/HomepageSomeOtherInfo';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomepageHero />
      <HomepageAboutUs />
    </div>
  );
}

export default App;
