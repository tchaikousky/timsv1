import React from 'react';
import Navbar from './components/Navbar';
import HomepageHero from './components/HomepageHero';
import HomepageAboutUs from './components/HomepageAboutUs';
import HomepageSomeOtherInfo from './components/HomepageSomeOtherInfo';
import DashboardMain from './components/DashboardMain';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <HomepageHero />
      <HomepageAboutUs /> */}
      <DashboardMain />
    </div>
  );
}

export default App;
