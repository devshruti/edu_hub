// src/pages/Home.js

import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import '../style/home.css';

const Home = () => {
    return (
        <div className="home-container">
            <div className="content">
                <h1>Welcome to L M S</h1>
                <Link to="/login">
                    <Button type="primary" size="large" style={{borderRadius:"5%", fontSize:"20px", height:"50px",fontWeight:"700", width:"120px", backgroundColor:"#00489b"}}>Login</Button>
                </Link>
            </div>
        </div>
    );
};

export default Home;
