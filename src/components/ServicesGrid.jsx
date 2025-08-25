// src/components/ServicesGrid.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ServicesGrid = ({ services}) => {
    return (
        <div className="services-section">
            <div className="services-header">
                <h3>Services</h3>
                <span className="more-link">More &gt;</span>
            </div>
            <div className="services-grid">
                {services.map((service) => (
                    <Link
                        key={service.id}
                        to={`/${service.name.toLowerCase().replace(/\s/g, '-')}`}
                        className="service-item"
                    >
                        <div className="service-icon">{service.icon}</div>
                        {service.tag && <span className="service-tag">{service.tag}</span>}
                        <span>{service.name}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ServicesGrid;