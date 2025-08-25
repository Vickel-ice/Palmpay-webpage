import React from 'react';
import userAvatar from '../Img/avatar.jpeg';
const Header = () => {
    return (
        <div className="header">
            <div className="profile-info">
                <div className="profile-pic">
                <img
                    src={userAvatar}
                    alt="user avatar"
                    className="user-avatar"
                />
            </div>
            <div className="welcome-text">
                <p>Hi, James</p>
                <span>Welcome, let's make payments!</span>
            </div>
            </div>
            <div className="header-icons">
                <span className="icon">🎧</span>
                <span className="icon">🔔 10</span>
            </div>
        </div>
    
    );
};

export default Header;