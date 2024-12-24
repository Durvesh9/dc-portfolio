import React, {useState, useEffect} from "react";
import './style.css';
import './portfoliomedia.css';

const Footer = () => {

    return(
        <footer>
        <div class="footerstyle">
        <span style={{ fontFamily: "Poppins, sans-serif" }}>Created By <a href="#">Durvesh Chaudhari</a> | <span
                class="copyright" style={{ fontFamily: "Poppins, sans-serif" }}>Copyright &#169;</span> 2023 All rights reserved.</span>
        </div>
    </footer>
    );
};

export default Footer;