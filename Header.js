import React from 'react';
import './Header.css';
import video from './Video.mp4';

const Header = () => {
    return (
        <header className="header">
            <div className="header-content">
                <video autoPlay loop muted >
                    <source src={video} type="video/mp4" />
                </video>
                <div className="buttons">
                    <h1>Lorem ipsum <span className="highlight">dolor</span></h1>
                    <button className="btn">Explore❯</button>
                    <button className="btn primary">Explore❯</button>
                </div>
            </div>
        </header>
    );
};

export default Header;
