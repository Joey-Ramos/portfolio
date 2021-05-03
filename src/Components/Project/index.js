import React from 'react';
import callItANight from '../../assets/images/callitanight.png';
import readingNook from '../../assets/images/the-reading-nook.png';
import movieLot from '../../assets/images/movielot.png';


function Project() {
    

    return (
        <div className="projects">
            <h1>Projects</h1>
            <h2>Judge Not Lest Ye Be Judged</h2>
            <div className="project-wrapper">
                <div className="project">
                    <div className="project-image-container">
                        <a href="https://christopherconcannon.github.io/call-it-a-night/">
                            <img className="project-image" src={callItANight} alt="project-cover" height="175" width="250"/>
                        </a>
                    </div>
                    <h3 className="project-title">Call It A Night</h3>
                    <p className="project-description">Call it a Night(CIAN) is a research tool for
                        making the perfect date night possible!
                    </p>
                </div>
                <div className="project">
                    <div className="project-image-container">
                        <a href="https://movielot.herokuapp.com/">
                            <img className="project-image" src={movieLot} alt="project-cover" height="175" width="250"/>
                        </a>
                    </div>
                    <h3 className="project-title">Movie Lot</h3>
                    <p className="project-description">As movie lovers, we wanted an app that would introduce us to
                    new and old movies to change our normal variety. Then save the movies to remind us to watch them.
                    </p>
                </div>
                <div className="project">
                    <div className="project-image-container">
                        <a href="https://thereadingnook.herokuapp.com/">
                            <img className="project-image" src={readingNook} alt="project-cover" height="175" width="250"/>
                        </a>
                    </div>
                    <h3 className="project-title">The Reading Nook</h3>
                    <p className="project-description">A blog style website designed to give avid readers
                    a place where they can find new book recommendations, review books,and post discussions
                    with a friendly community.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Project;