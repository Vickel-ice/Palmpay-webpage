// src/components/MoneyTransfer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import withdrawIcon from '../Img/withdraw_7798571.png';

const MoneyTransfer = () => {
    return (
        <div className="money-transfer-section">
            <h3>Money Transfer</h3>
            <div className="transfer-options">
                {/* Use Link for each item */}
                <Link to="/to-bank" className="transfer-item">
                    <div className="transfer-icon">🏦</div>
                    <span>To Bank</span>
                </Link>
                <Link to="/to-palmpay" className="transfer-item">
                    <div className="transfer-icon">🅿️</div>
                    <span>To PalmPay</span>
                </Link>
                <Link to="/withdraw" className="transfer-item">
                    <div className="transfer-icon">
                        <img
                            src={withdrawIcon} 
                            alt="withdrawal icon"
                            className="withdraw-icon" 
                        />
                    </div>
                    <span>Withdraw</span>
                </Link>
            </div>
        </div>
    );
};

export default MoneyTransfer;