import React, { useEffect } from "react";
import './style.css';
import './portfoliomedia.css';
import './Footer';

const Contact = () => {

    useEffect(() => {
        // Include Font Awesome script dynamically
        const script = document.createElement('script');
        script.src = 'https://kit.fontawesome.com/87344de0d0.js';
        script.crossOrigin = 'anonymous';
        script.async = true;
        document.head.appendChild(script);

        return () => {
            // Remove the script when the component unmounts
            document.head.removeChild(script);
        };
    }, []);

    return (

        <section id="contactdetails">
        <div className="container max-width contactdetails">
            <h1>Contact Me</h1>
            <div className="contact-row">
                <div className="contact-left">
                        <h2>Contact Details</h2>
                        <div className="info" >
                            <div className="description">
                                <p>Get in touch with me! I'd love to connect, collaborate, or answer any questions you may have. Use the contact form or reach out via email or phone. Let's chat and explore exciting opportunities together!<br/><br/></p>
                            </div>
                            <div className="icons">
                                <p>&nbsp;<i className="fa-solid fa-location-dot"> </i>  Boisar, Maharashtra</p>
                                <p><i className="fa-solid fa-envelope"> </i> 121durvesh6007@sjcem.edu.in</p>
                                <p><i className="fas fa-phone-square"> </i> +91 9284856741</p>
                            </div>
                            <div className="social-icons">
                                <a href="https://www.facebook.com/durvesh.chaudhari.330?mibextid=ZbWKwL"><i className="fa-brands fa-facebook"></i></a>
                                <a href="https://www.linkedin.com/in/durveshchaudhari"><i className="fa-brands fa-linkedin"></i></a>
                                <a href="https://instagram.com/durvesh.dc"><i className="fa-brands fa-instagram"></i></a>
                                <a href="https://github.com/Durvesh9"><i className="fa-brands fa-github"></i></a>
                            </div>
                        </div>
                        {/* <!-- <a href="" className="btn btn2">Download CV</a> --> */}
                    </div>  
                    
                    <div className="contact-right">
                        <h2>Get in Touch</h2>
                        <form id="contact-form" action="https://formspree.io/f/xknalewe" method="POST" data-netlify="true" >
                            <input type="text" name="name" placeholder="Your Name" required/>
                            <input type="email" name="email" placeholder="Your Email" required/>
                            <textarea name="message" rows="6" placeholder="Your Message"></textarea>
                            <div className="contact-btn">
                                <button type="submit" className="btn" onclick="togglePopup()">Submit</button>
                            </div>
                        </form>
                    </div>
                </div> 
            </div>
            
            {/* <!-- <div className="popup" id="popup-1">
                <div className="overlay"></div>
                <div className="content">
                    <i className="fa-solid fa-circle-check" style="color: #2bff2b;"></i>
                    <h2>Thank You !</h2>
                    <p>Message sent Successfully</p>
                    <div className="ok-button">
                        <button type="button" onclick="closePopup()">OK</button>
                    </div>
                </div>
            </div> --> */}
        </section>


    );
};

export default Contact;