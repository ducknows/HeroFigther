import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Rolldice from './PageComponents/Rolldice'
import AppFrame from './PageComponents/AppFrame';
import BrickWall from './PageComponents/BrickWall';
import Navbar from './PageComponents/Navbar';
import LeftSection from './PageComponents/LeftSection';
import HeroSection1 from './PageComponents/Rooms/HeroSection1';
import HeroSection71 from './PageComponents/Rooms/HeroSection71';
import HeroSection278 from './PageComponents/Rooms/HeroSection278';
import RightSection from './PageComponents/RightSection';
import Footer from './PageComponents/Footer';


function App() {

  return (
    <Router>
      <div className="App">
        <AppFrame>
          <div className="app-container">
            <Navbar />
            <LeftSection />

            <Routes>
              <Route path="/" element={<HeroSection1 />} />
              <Route path="/71" element={<HeroSection71 />} />
              <Route path="/278" element={<HeroSection278 />} />
            </Routes>

            <RightSection />
          </div>
          <Footer />
          <BrickWall>
            <Rolldice />
          </BrickWall>
        </AppFrame>
      </div>
    </Router>
  );
}

export default App;
