import React, { useState, useEffect } from 'react';
import Typed from 'typed.js';
import './style.css'; // Import the shared CSS file
import './Footer.js';
import './portfoliomedia.css'


const Homepage = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    useEffect(() => {
        // Initialize Typed.js when the component mounts
        var typed = new Typed('#element', {
            strings: ['Web Developer', 'Graphic Designer', 'Video Editor', 'Programmer'],
            typeSpeed: 100,
            loop: true,
        });

        // Clean up Typed.js instance when the component unmounts
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <section id="header" className="header">
            <nav className={`navbar ${isDropdownOpen ? 'open' : ''}`}>
                <div className="container">
                    <div className="logo-div">
                        <a href="#header"><img src="bgl-removebg-preview.png" alt="Logo" className="logo" /></a>
                    </div>
                    <div className="nav-links">
                        <ul className="ul">
                            <li><a href="#header">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#skills-section">Skills</a></li>
                            <li><a href="#header">Portfolio</a></li>
                            <li style={{ marginRight: 0 }}><a href="#contactdetails">Contact</a></li>
                        </ul>
                    </div>
                    <div className="toggle_btn" onClick={toggleDropdown}>
                        <i className={`fa-solid ${isDropdownOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
                    </div>
                </div>
            </nav>

            <div className={`dropdown_menu ${isDropdownOpen ? 'open' : ''}`}>
                <li><a href="#header">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills-section">Skills</a></li>
                <li><a href="#header">Portfolio</a></li>
                <li style={{ marginRight: 0 }}><a href="#contactdetails">Contact</a></li>
            </div>

            <section className="header-text">
                <div className="landing-page">
                    <span className="name-style">Hi, My name is <span className="name">Durvesh</span><span className="surname"> Chaudhari</span></span><br />
                    <span className="tagline" style={{ margin: '1rem 0' }}>And I am a Passionate</span><br />
                    <span id="element" style={{ margin: '1rem 0', color: '#ff004b' }}></span><br />
                    <div className="buttons">
                        <a href="https://drive.google.com/file/d/1BzHR5_eik_9Wc_QiM4J7Tixpu88Lzdc9/view?usp=sharing">
                            <button className="cv-button">Download Resume</button>
                        </a>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Homepage;
