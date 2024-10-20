// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="home-page">
            <h1>Домашняя страница</h1>
            <ul>
                <li><Link to="/chats">Чаты</Link></li>
                <li><Link to="/profile">Профиль</Link></li>
            </ul>
        </div>
    );
};

export default HomePage;
