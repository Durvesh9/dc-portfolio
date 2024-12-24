import React,{ useState, useEffect } from "react";
import './style.css';
import './portfoliomedia.css';

const Skills = () => {
    
    return(

        // <!--skills-->

    <section className="skills-section" id="skills-section">
        <div className="container max-width container-skills">
            <h1>Skills</h1>
            <div className="skill-row">
                <div className="skill-left">
                    <div className="left-content">
                        <h2>My Creative Skills & Projects</h2>
                        <p>Expertise in communication, problem solving, and teamwork.
                            Strong technical thinking and data analysis skills.
                            Additional capabilities in graphic designing and video editing. 
                            Noteworthy projects include Pharmacy Management System, Personal Portfolio Website, Calculator Using Python, Weather App using Python.</p><br/>
                            <div className="buttons">
                                <button className="skill-button">Read More</button>
                            </div>
                    </div>
                </div>
                
                    <div className="skill-right">
                        <div className="skills">
                            <div className="skill"> 
                                <div className="skill-name">HTML</div>
                                <div className="skill-bar">
                                    <div className="skill-per" per="90%" style={{ maxWidth: '90%' }}></div>
                                </div>
                            </div>
                        
                            <div className="skill">
                                <div className="skill-name">CSS</div>
                                <div className="skill-bar">
                                    <div className="skill-per" per="60%" style={{ maxWidth: '60%' }}></div>
                                </div>
                            </div>
                        
                            <div className="skill">
                                <div className="skill-name">Javascript</div>
                                <div className="skill-bar">
                                    <div className="skill-per" per="40%" style={{ maxWidth: '40%' }}></div>
                                </div>
                            </div>
                            <div className="skill">
                                <div className="skill-name">Python</div>
                                <div className="skill-bar">
                                    <div className="skill-per" per="50%" style={{ maxWidth: '50%' }}></div>
                                </div>
                            </div>
                            
                            <div className="skill">
                                <div className="skill-name">Mysql</div>
                                <div className="skill-bar">
                                    <div className="skill-per" per="60%" style={{ maxWidth: '60%' }}></div>
                                </div>
                            </div>
                                
                        </div>
                    </div>
            </div>
        </div>
    </section>

    );

};

export default Skills;