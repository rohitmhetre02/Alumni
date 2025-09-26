import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/AlmaCard.css';

export default function AlmaCard() {
    const location = useLocation();
    const navigate = useNavigate();

    const defaultUser = {
        name: 'Alumni Member',
        avatar: 'https://i.pravatar.cc/150',
        basicInfo: { degree: 'Bachelor of Engineering', major: 'Information Technology' },
    };

    const user = location.state?.user || defaultUser;

    const cardDesignData = {
        logo1: 'https://placehold.co/100x40/ffffff/000000?text=Ikroop',
        logo2: 'https://placehold.co/40x40/ffffff/000000?text=Logo',
        classOf: '2024',
        alumniId: '21BECE30351',
        qrCode: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=UserId-12345'
    };

    return (
        <div className="alma-card-overlay">
            <div className="alma-card-popup">
                {/* Close Button */}
                <button className="close-btn" onClick={() => navigate(-1)}>×</button>

                <div className="card-top-bar">
                    <img src={cardDesignData.logo1} alt="Ikroop Logo" className="logo-main" />
                    <img src={cardDesignData.logo2} alt="Institute Logo" className="logo-secondary" />
                </div>

                <div className="card-main-content">
                    <div className="user-info-section">
                        <div className="user-photo-container">
                            <img src={user.avatar} alt={user.name} className="user-photo" />
                        </div>
                        <div className="user-details">
                            <h2>
                                {user.name}
                                <i className="fas fa-check-circle verified-icon"></i>
                            </h2>
                            <div className="class-year">Class of {cardDesignData.classOf}</div>
                            <p>{user.basicInfo.degree}</p>
                            <p>{user.basicInfo.major}</p>
                        </div>
                    </div>

                    <div className="card-bottom-details">
                        <div className="qr-code-container">
                            <img src={cardDesignData.qrCode} alt="QR Code" />
                        </div>
                        <div className="alumni-id-container">
                            <span>Alumni ID</span>
                            <p>{cardDesignData.alumniId}</p>
                        </div>
                    </div>
                </div>

                <div className="card-bottom-bar"></div>
            </div>
        </div>
    );
}
