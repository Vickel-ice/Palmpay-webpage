import React from 'react';
import { NavLink } from 'react-router-dom';

const BottomNav = () => {
   

    return (
        <div className="bottom-navigation">
            {/* NavLink automatically adds an 'active' class to the active link */}
            <NavLink to="/" className="nav-item">
                <div className="nav-icon">🏠</div>
                <span>Home</span>
            </NavLink>
            <NavLink to="/loan" className="nav-item">
                <div className="nav-icon">📈</div>
                <span>Loan</span>
            </NavLink>
            <NavLink to="/wealth" className="nav-item">
                <div className="nav-icon">💰</div>
                <span>Wealth</span>
            </NavLink>
            <NavLink to="/reward" className="nav-item">
                <div className="nav-icon">🎁</div>
                <span>Reward</span>
            </NavLink>
            <NavLink to="/me" className="nav-item">
                <div className="nav-icon">👤</div>
                <span>Me</span>
            </NavLink>
        </div>
    );
};

export default BottomNav;