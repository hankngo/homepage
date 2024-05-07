import React from 'react';
import '../../styles/SearchSection.css'; // Make sure this is your CSS file path

const SearchSection = () => {
  return (
    <div className="search-section">
      <div className="welcome-banner">
        Welcome to our future website! <a href="https://williamston-mi.us/welcome-to-our-new-website/">Learn more</a>
      </div>
      <img src="https://storage.googleapis.com/proudcity/williamstonmi/uploads/2024/01/IMG_1404_copy-min-2000x1333.jpeg" alt="Beautiful Williamston, MI" className="search-image" />
      <div className="search-content">
        <h1>Proudly serving Williamston, MI</h1>
        <p>How can we help you?</p>
        <div className="search-box">
          <input type="text" placeholder="Search..." />
          <button type="submit"><i className="fas fa-search"></i></button>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
