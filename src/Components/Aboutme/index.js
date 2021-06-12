import React from 'react';



function About() {


    return (
        <div className='about'>
            <h1 className='about-title'>About Me</h1>
            <div className='about-wrapper'>
                <div className='about-bio'>
                    <img/>
                    <p>Junior Web Developer. From West Texas. Oilfield, Skills, Finance Bro, Gaming.</p>
                </div>
                <div className='about-skills'>
                    <p>HTML, CSS, JavaScript</p>
                    <img/>
                </div>
                <div className='about-work'>
                    <img/>
                    <p>Oilfield Work History.</p>
                </div>
                <div className='about-finance'>
                    <p>Finance Interests</p>
                    <img/>
                </div>
                <div className='about-gaming'>
                    <img/>
                    <p>Gaming/Apex Legends</p>
                </div>
            </div>
        </div>
    )
}

export default About;