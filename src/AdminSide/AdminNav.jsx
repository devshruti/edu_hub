// src/components/Navbar.js

import React, { useState } from 'react';
import { Layout, Menu, Input } from 'antd';
import { Link } from 'react-router-dom';

const { Header } = Layout;
const { Search } = Input;

const Navbar = () => {
    const [searchValue, setSearchValue] = useState('');

    const handleSearch = (value) => {
        // Handle search logic here, such as filtering courses based on the search value
        console.log('Search value:', value);
        setSearchValue(value);
    };

    return (
        <Header >
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{ display: 'flex', justifyContent: 'space-between', width: "95%" }}>
                <Menu.Item key="0"><h1 style={{ height: "40px", fontWeight: "900", fontSize: "22px", marginTop: "-4%" }}>L M S</h1></Menu.Item>
                <div>
                    <Menu.Item key="1"><Link to="/Admin">Dashboard</Link></Menu.Item>
                    <Menu.Item key="2"><Link to="/courses">Courses</Link></Menu.Item>
                    <Menu.Item key="3"><Link to="/students">Students</Link></Menu.Item>
                    <Menu.Item key="4"><Link to="/lectures">Lectures</Link></Menu.Item>
                </div>
                <Menu.Item key="5">
                    <Search
                        placeholder="Search courses"
                        allowClear
                        onSearch={handleSearch}
                        style={{ width: 200, marginTop: "8%" }}
                    /></Menu.Item>

            </Menu>
        </Header>
    );
};

export default Navbar;
