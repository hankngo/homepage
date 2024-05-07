import React from 'react';
import '../../styles/PopularServices.css'; // Ensure this is the correct path

function PopularServices() {
    const services = [
        { id: 1, icon: 'fa-list-check', name: 'Permits' },
        { id: 2, icon: 'fa-folder-open', name: 'FOIA request' },
        { id: 3, icon: 'fa-faucet-drip', name: 'Pay water bill' },
        { id: 4, icon: 'fa-calendar-days', name: 'Public calendar' }
    ];    

    return (
        <div className="container">
            <div className="services-title">
                <h2>Popular Services</h2>
            </div>
            <div className="services-container">
                {services.map(service => (
                    <div key={service.id} className="service-card">
                        <i className={`fa ${service.icon} fa-3x`}></i>
                        <div className="service-name">{service.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PopularServices;
