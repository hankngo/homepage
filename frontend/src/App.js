import React from 'react';
import './styles/App.css'; 
import logo from './assets/logo.svg';
import Navbar from './components/layout/Navbar';
import SearchSection from './components/layout/SearchSection';


function App() {
  return (
    <div className="App">
      <Navbar />
      <SearchSection />
      {/* Other components will be added here */}
    </div>
  );
}

export default App;
