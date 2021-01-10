import React from 'react';
import callItANight from '../../assets/images/callitanight.png';



function Project() {
    

    return (
        <div className="projects">
            <h1>Projects</h1>
            <div className="project">
                <div className="project-image-container">
                    <img className="project-image" src={callItANight} height="175" width="250"/>
                </div>
                <h3 className="project-title">Call It A Night</h3>
                <p className="project-description">Call it a Night(CIAN) is a research tool for
                    making the perfect date night possible!
                </p>
            </div>
        </div>
    )
}

export default Project;