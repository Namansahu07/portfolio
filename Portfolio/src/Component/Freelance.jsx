import React from 'react';
import './Freelance.css';

const Freelance = () => {
    const emailAddress = 'ns0110cvv@gmail.com';
    const phoneNumber = '+1234567890'; // Replace with your actual phone number
    const whatsappNumber = ''; // Replace with your actual WhatsApp number

    return (
        <div className="freelance-container">
            <h1>Contact Me for Freelance Work</h1>
            <div className="contact-options">
                <div className="contact-option">
                    <a href={`mailto:${emailAddress}`} target="_blank" rel="noopener noreferrer">
                        Email Me
                    </a>
                </div>
                <div className="contact-option">
                    <a href={`tel:${phoneNumber}`}>
                        Call Me
                    </a>
                </div>
                <div className="contact-option">
                    <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                        WhatsApp Me
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Freelance;