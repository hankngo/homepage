import React from 'react';
import './styles/App.css'; 
import logo from './assets/logo.svg';
import Navbar from './components/layout/Navbar';
import SearchSection from './components/layout/SearchSection';
import PopularServices from './components/layout/PopularServices';
import GovernmentSection from './components/layout/GovernmentSection';
import Calendar from './components/layout/Calendar';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SearchSection />
      <PopularServices />
      <GovernmentSection />
      <Calendar />
      <Footer />
    </div>
  );
}

export default App;
