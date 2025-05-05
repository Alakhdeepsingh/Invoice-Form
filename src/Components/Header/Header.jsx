import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // <-- import this
import './Header.css';

const Header = () => {
    const [activeTab, setActiveTab] = useState('Vendor Details');
    const navigate = useNavigate(); // <-- initialize navigate
    const tabs = ['Vendor Details', 'Invoice Details', 'Comments'];

    const handleLogout = () => {
        localStorage.removeItem('user'); // <-- clear user data
        navigate('/login'); // <-- redirect to login page
    };

    const scrollToTab = (tab) => {
        setActiveTab(tab);
        const idMap = {
            'Vendor Details': 'vendor-details',
            'Invoice Details': 'invoice-details',
            'Comments': 'comments',
        };
        const section = document.getElementById(idMap[tab]);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="header-container">
            <div className="header-title">
                <span className="back-arrow">←</span>
                <span className="title-text">Create New Invoice</span>
            </div>
            <div className="tabs">
                {tabs.map(tab => (
                    <span
                        key={tab}
                        className={`tab-item ${activeTab === tab ? 'active' : ''}`}
                        onClick={() => scrollToTab(tab)}
                    >
                        {tab}
                    </span>
                ))}
            </div>
            <div className='header-actions'>
                <button type="dummy-data">Fill with dummy data</button>
                <button className="logout-button" onClick={handleLogout}>Logout</button>
            </div>
        </div>
    );
};

export default Header;
