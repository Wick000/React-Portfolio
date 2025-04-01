//import React from "react";
import "./Resume.css"
function Resume () {
    return (
        <div className = "resume">
            <a href="https://drive.google.com/uc?export=download&id=1ecP8Nr54aSQMPEhIHKTAvCFZMr7HdjIJ" download>
                Download My Resume (PDF)
            </a>

            <h2 className = "rTitle">Resume</h2>
            <h3>Front-end Proficiencies</h3>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Responsive Design</li>
                    <li>React</li>
                    <li>Bootstrap</li>

                </ul>
            <h3>Back-end Proficiencies</h3>
                <ul>
                    <li>APIs</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>PostgresSql, Sequelize</li>
                    <li>Vite</li>
                </ul>    
        </div>
    );
};


export default Resume;