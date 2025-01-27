import React, { useState } from 'react';
import './style.css';
import './portfoliomedia.css';

const About = () => {
    const [activeTab, setActiveTab] = useState('experience');
    const [showFullExperience, setShowFullExperience] = useState(false);

    const openTab = (tabName) => {
        setActiveTab(tabName);
    };

    const toggleExperience = () => {
        setShowFullExperience(!showFullExperience);
    };

    const experienceList = [
        { title: 'Web Content Developer Intern at Udyog Suvidha Kendra, Palghar', duration: '(December 2024 - Present)' },
        { title: 'Secretary at Association of Students for Computing Artificial Intelligence (ASCAI)', duration: '(August 2024 - Present)' },
        { title: "Senior Editor and Designer of Newsletter Epoch 2.0 (AIML's Departmental Newsletter)", duration: '(October 2024)' },
        { title: 'Coordinator at Association of Students for Computing Artificial Intelligence (ASCAI)', duration: '(August 2023 - August 2024)' },
        { title: 'Design Joint Head & Laser Tag Event Head at Megaleio (National Level College Event)', duration: '(March 2024)' },
        { title: "Senior Editor and Designer of Newsletter Epoch 1.0 (AIML's Departmental Newsletter)", duration: '(September 2023)' },
        { title: 'Design Team Member at Sophisticated and Perpetual Coders Association', duration: '(August 2022 - May 2023)' },
        { title: 'Design Team Member at Competitive Coding Club', duration: '(October 2022 - May 2023)' },
        { title: 'Design Team Member & Volunteer at Megaleio (National Level College Event)', duration: '(March 2023)' },
        { title: 'Design Team Member & Volunteer at Battle of Codes (Inter-College Hackathon)', duration: '(October 2022)' },
    ];
    

    return (
        <section className="about" id="about">
            <div className="container max-width about">
                <h1>About Me</h1>
                <div className="about-row">
                    <div className="column-left">
                        <img src={process.env.PUBLIC_URL + '/images/Durveshc.jpg'} alt="Durvesh" />
                    </div>
                    <div className="column-right">
                        <h2>Introduction</h2>
                        <p className="para">
                            Hii, I am <span className="name">Durvesh Chaudhari</span>. I'm a web developer and graphic designer,
                            combining my love for coding with a keen eye for design. I enjoy creating visually stunning websites and
                            engaging digital experiences. From crafting elegant user interfaces to designing captivating graphics, I
                            strive to deliver compelling and impactful solutions. Let's bring your ideas to life with a perfect blend of
                            creativity and technical expertise!
                        </p>
                        <div className="tab-titles">
                            <p
                                className={`tab-links ${activeTab === 'experience' ? 'active-link' : ''}`}
                                onClick={() => openTab('experience')}
                            >
                                Experience
                            </p>
                            <p
                                className={`tab-links ${activeTab === 'education' ? 'active-link' : ''}`}
                                onClick={() => openTab('education')}
                            >
                                Education
                            </p>
                        </div>
                        <div className={`tab-contents ${activeTab === 'experience' ? 'active-tab' : ''}`} id="experience">
                            <ul>
                                {experienceList
                                    .slice(0, showFullExperience ? experienceList.length : 3)
                                    .map((item, index) => (
                                        <li key={index}>
                                            <span>{item.title}</span>
                                            <br />
                                            <span>{item.duration}</span>
                                        </li>
                                    ))}
                            </ul>
                            <button className="toggle-btn" onClick={toggleExperience}>
                                {showFullExperience ? 'Show Less' : 'Read More'}
                            </button>
                        </div>
                        <div className={`tab-contents ${activeTab === 'education' ? 'active-tab' : ''}`} id="education">
                            <ul>
                                <li>
                                    <span>2021-2025</span>
                                    <br />
                                    <span>B.Tech in Artificial Intelligence and Machine Learning from St. John College of Engineering and Management affiliated to University of Mumbai, Palghar</span>
                                </li>
                                <li>
                                    <span>2008 - 2021</span>
                                    <br />
                                    <span>
                                        Higher Secondary Certificate (2019 - 2021)
                                        <br />
                                        Senior Secondary Certificate (2008 - 2019)
                                    </span>
                                    <br />
                                    From Teens World Corporate School, Boisar 401-501/
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;



// import React, { useState } from 'react';
// import './style.css';
// import './portfoliomedia.css';

// const About = () => {
//     const [activeTab, setActiveTab] = useState('experience');

//     const openTab = (tabName) => {
//         setActiveTab(tabName);
//     };

//     return (
//         <section className="about" id="about">
//             <div className="container max-width about">
//                 <h1>About Me</h1>
//                 <div className="about-row">
//                     <div className="column-left">
//                         <img src={process.env.PUBLIC_URL + '/images/Durveshc.jpg'} alt="Durvesh" />
//                     </div>

//                     <div className="column-right">
//                         <h2>Introduction</h2>
//                         <p className="para">
//                             Hii, I am <span className="name">Durvesh Chaudhari</span>. I'm a web developer and graphic designer,
//                             combining my love for coding with a keen eye for design. I enjoy creating visually stunning websites and
//                             engaging digital experiences. From crafting elegant user interfaces to designing captivating graphics, I
//                             strive to deliver compelling and impactful solutions. Let's bring your ideas to life with a perfect blend of
//                             creativity and technical expertise!
//                         </p>
//                         <div className="tab-titles">
//                             <p
//                                 className={`tab-links ${activeTab === 'experience' ? 'active-link' : ''}`}
//                                 onClick={() => openTab('experience')}
//                             >
//                                 Experience
//                             </p>
//                             <p
//                                 className={`tab-links ${activeTab === 'education' ? 'active-link' : ''}`}
//                                 onClick={() => openTab('education')}
//                             >
//                                 Education
//                             </p>
//                         </div>
//                         <div className={`tab-contents ${activeTab === 'experience' ? 'active-tab' : ''}`} id="experience">
//                             <ul>
//                                 <li>
//                                     <span>Web Content Developer Intern at Udyog Suvidha Kendra, Palghar</span>
//                                     <br />
//                                     <span>(December 2024 - Present)</span>
//                                 </li>
//                                 <li>
//                                     <span>Secretary at Association of Students for Computing Artificial Intelligence (ASCAI)</span>
//                                     <br />
//                                     <span>(August 2024 - Present)</span>
//                                 </li>
//                                 <li>
//                                     <span>Senior Editor and Designer of Newsletter Epoch 2.0 (AIML's Departmental Newsletter)</span>
//                                     <br />
//                                     <span>(October 2024)</span>
//                                 </li>
//                                 <li>
//                                     <span>Coordinator at Association of Students for Computing Artificial Intelligence (ASCAI)</span>
//                                     <br />
//                                     <span>(August 2023 - August 2024)</span>
//                                 </li>
//                                 <li>
//                                     <span>Design Joint Head & Laser Tag Event Head at Megaleio (National Level College Event)</span>
//                                     <br />
//                                     <span>(March 2024)</span>
//                                 </li>
//                                 <li>
//                                     <span>Senior Editor and Designer of Newsletter Epoch 1.0 (AIML's Departmental Newsletter)</span>
//                                     <br />
//                                     <span>(September 2023)</span>
//                                 </li>
//                                 <li>
//                                     <span>Design Team Member at Sophisticated and Perpetual Coders Association</span>
//                                     <br />
//                                     <span>(August 2022 - May 2023)</span>
//                                 </li>
//                                 <li>
//                                     <span>Design Team Member at Competitive Coding Club</span>
//                                     <br />
//                                     <span>(October 2022 - May 2023)</span>
//                                 </li>
//                                 <li>
//                                     <span>Design Team Member & Volunteer at Megaleio (National Level College Event)</span>
//                                     <br />
//                                     <span>(March 2023)</span>
//                                 </li>
//                                 <li>
//                                     <span>Design Team Member & Volunteer at Battle of Codes (Inter-College Hackathon)</span>
//                                     <br />
//                                     <span>(October 2022)</span>
//                                 </li>
//                             </ul>
//                         </div>
//                         <div className={`tab-contents ${activeTab === 'education' ? 'active-tab' : ''}`} id="education">
//                             <ul>
//                                 <li>
//                                     <span>2021-2025</span>
//                                     <br />
//                                     <span>B.Tech in Artificial Intelligence and Machine Learning from St. John College of Engineering and Management affiliated to University of Mumbai, Palghar</span>
//                                 </li>
//                                 <li>
//                                     <span>2008 - 2021</span>
//                                     <br />
//                                     <span>
//                                         Higher Secondary Certificate (2019 - 2021)
//                                         <br />
//                                         Senior Secondary Certificate (2008 - 2019)
//                                     </span>
//                                     <br />
//                                     From Teens World Corporate School, Boisar 401-501/
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default About;


