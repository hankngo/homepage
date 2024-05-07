import React from 'react';
import '../../styles/PopularServices.css'; // Ensure this is the correct path

function PopularServices() {
    const services = [
        { id: 1, icon: 'fa-list-check', name: 'Permits', url: 'https://williamston-mi.us/permits/' },
        { id: 2, icon: 'fa-folder-open', name: 'FOIA request', url: 'https://williamston-mi.us/documents/freedom-of-information-act-request/' },
        { id: 3, icon: 'fa-faucet-drip', name: 'Pay water bill', url: 'https://bsaonline.com/OnlinePayment/OnlinePaymentSearch?PaymentApplicationType=10&uid=590' },
        { id: 4, icon: 'fa-calendar-days', name: 'Public calendar', url: 'https://williamston-mi.us/documents/public-calendar-2024/' }
    ];  

    return (
        <div className="container">
            <div className="services-title">
                <h2>Popular Services</h2>
            </div>
            <div className="services-container">
                {services.map(service => (
                    <a key={service.id} href={service.url} className="service-card" target="_blank" rel="noopener noreferrer">
                        <i className={`fa ${service.icon} fa-3x`}></i>
                        <div className="service-name">{service.name}</div>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default PopularServices;
