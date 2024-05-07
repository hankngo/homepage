import React from 'react';
import "../../styles/Footer.css"; // Adjust the path as needed

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h4>Welcome</h4>
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Community</a></li>
                        <li><a href="#">News</a></li>
                        <li><a href="#">Events/Meetings</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Engage</h4>
                    <ul>
                        <li><a href="#">Connect</a></li>
                        <li><a href="#">Subscribe</a></li>
                        <li><a href="#">Feedback</a></li>
                        <li><a href="#">Jobs</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Help</h4>
                    <ul>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Directory</a></li>
                        <li><a href="#">Sitemap</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-powered">
                Powered by <a href="https://www.proudcity.com"><img src="https://williamston-mi.us/wp-content/plugins/wp-proud-core/assets/images/logo-white-1x.png" alt="ProudCity Logo" className="proudcity-logo" /></a>
            </div>
        </footer>
    );
};

export default Footer;
