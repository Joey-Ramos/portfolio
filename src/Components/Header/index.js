import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../../assets/images/profile.jpg';
import emailIcon from '../../assets/icons/emailicon2.png';
import linkedinIcon from '../../assets/icons/linkedinicon2.png';
import githubIcon from '../../assets/icons/githubicon4.png';

function Header() {

    const headerStyle = {
        textDecoration: 'none',
    }
    
    return (
        <div className="header">
            <Link style={headerStyle} to="/">
                <div className="profile-image">
                    <img className="profile-pic" src={profile} alt="Avatar" width="100px" height="100px" />
                </div>
                <div className="name">
                    <h4>Joey Ramos</h4>
                </div>
            </Link>
            <div className="icons">
                <a href="mailto:jramos1202@gmail.com" className="logo">
                    <img src={emailIcon} alt="Logo" />
                </a>
                <a href="https://www.linkedin.com/in/joseph-ramos-8630031aa/" className="logo">
                    <img src={linkedinIcon} alt="Logo" />
                </a>
                <a href="https://github.com/Joey-Ramos" className="logo">
                    <img src={githubIcon} alt="Logo" />
                </a>
            </div>
        </div>
    )
}

export default Header;