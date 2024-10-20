// src/components/Dashboard.js
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <h2>Dashboard</h2>
            <nav>
                <ul>
                    <li>
                        <Link to="profile">Profile</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    );
};

export default Dashboard;
