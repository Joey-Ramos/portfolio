import React from 'react';
import { Link } from 'react-router-dom';



function Links() {

    const linkStyle = {
        color: 'black',
        textDecoration: 'none'
    };
    
    return (
        <div className="links-list">
            <Link style={linkStyle} to="/about">
                <div className="links">
                    <p>About Me</p>
                </div>
            </Link>
            <Link style={linkStyle} to="/project">
                <div className="links">
                    <p>Projects</p>
                </div>
            </Link>
            <Link style={linkStyle} to="/contact">
                <div className="links">
                    <p>Contact Me</p>
                </div>
            </Link>
        </div>
        
    )
}

export default Links;