// src/pages/AnalyticsDashboard.js

import React from 'react';
import { Card } from 'antd';
import Navbar from './AdminNav';

const AnalyticsDashboard = () => {
    return (
        <div>
            <Navbar />
            <div style={{ padding: '24px' }}>
                <h1>Analytics Dashboard</h1>
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <Card title="Total Students" style={{ width: 300 }}>
                        <p>1000</p> {/* Replace with actual number of students */}
                    </Card>
                    <Card title="Total Courses" style={{ width: 300 }}>
                        <p>50</p> {/* Replace with actual number of courses */}
                    </Card>
                    <Card title="Total Lectures" style={{ width: 300 }}>
                        <p>200</p> {/* Replace with actual number of lectures */}
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default AnalyticsDashboard;
