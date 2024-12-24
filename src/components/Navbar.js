// import React, { useState } from 'react';
// import './style.css'; // Import the shared CSS file
// import './portfoliomedia.css';

// const Navbar = () => {
//     const [isDropdownOpen, setDropdownOpen] = useState(false);

//     const toggleDropdown = () => {
//         setDropdownOpen(!isDropdownOpen);
//     };

//     return (
//         <nav className={`navbar ${isDropdownOpen ? 'open' : ''}`}>
//             <div className="container">
//                 <div className="logo-div">
//                     <a href="#"><img src="bgl-removebg-preview.png" alt="Logo" className="logo" /></a>
//                 </div>
//                 <div className="nav-links">
//                     <ul className="ul">
//                         <li><a href="#header">Home</a></li>
//                         <li><a href="#about">About</a></li>
//                         <li><a href="#skills-section">Skills</a></li>
//                         <li><a href="#">Portfolio</a></li>
//                         <li><a href="#contactdetails">Contact</a></li>
//                     </ul>
//                 </div>
//                 <div className="toggle_btn" onClick={toggleDropdown}>
//                     <i className={`fa-solid ${isDropdownOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
//                 </div>
//             </div>

//             <div className={`dropdown_menu ${isDropdownOpen ? 'open' : ''}`}>
//                 <ul>
//                     <li><a href="#header">Home</a></li>
//                     <li><a href="#about">About</a></li>
//                     <li><a href="#skills-section">Skills</a></li>
//                     <li><a href="#">Portfolio</a></li>
//                     <li><a href="#contactdetails">Contact</a></li>
//                 </ul>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;