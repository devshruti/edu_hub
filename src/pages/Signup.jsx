import React, { useState } from "react";
import { Button, Input, Select, Typography } from "antd";
import { UserOutlined, MailOutlined, LockOutlined, DashboardOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import image from "../assets/signinImg.jpg";
import "../style/signup.css";

const { Title, Text } = Typography;
const { Option } = Select;

function SignUpForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("Role");
    
  const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();

        navigate("/login")
        // Your sign-up logic here
    };
    const handleRoleChange = (value) => {
        setRole(value);
    };

    return (
        <>
            <div className="signup-container">
                <div className="signup-content">
                    <Title level={4} className="signup-heading">
                        Sign Up To AliciaFarm
                    </Title>
                    <Input
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        placeholder="Username"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="signup-input"
                    />
                    <Input
                        prefix={<MailOutlined className="site-form-item-icon" />}
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="signup-input"
                    />

                    <div className="select-content">

                        <Select
                            value={role}
                            onChange={handleRoleChange}
                            className="select-input"
                        >
                            <Option value="default">Role</Option>
                            <Option value="customer">Customer</Option>
                            <Option value="admin">Admin</Option>
                        </Select>
                    </div>
                    <Input.Password
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="signup-input"
                    />
                    <Button
                        type="primary"
                        size="large"
                        block
                        onClick={handleSignUp}
                        className="signup-button"
                    >
                        Sign UP
                    </Button>
                    <Text style={{ textAlign: "center" }}>
                        Already in AliciaFarm?{" "}
                        <Link to="/login" className="login-link">
                            Login to continue
                        </Link>
                    </Text>
                </div>
                <div className="signup-image">
                    <img src={image} alt="signup" className="signup-img" />
                </div>
            </div>
        </>
    );
}

export default SignUpForm;
