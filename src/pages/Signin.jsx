import React, { useState } from "react";
import { Button, Input, Typography } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import image from "../assets/signinImg.jpg";
import "../style/signin.css"

const { Title, Text } = Typography;

function SignInForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignIn = async (e) => {
        e.preventDefault();

        navigate("/admin")
        // Your sign-in logic here
    };

    return (
        <>
            <div className="signin-container">
                <div className="signin-content">
                    <Title level={4} className="signin-heading">
                        Login To LMS
                    </Title>
                    <Input
                        prefix={<MailOutlined className="site-form-item-icon" />}
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="signin-input"
                    />
                    <Input.Password
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="signin-input"
                    />
                    <Button
                        type="primary"
                        size="large"
                        block
                        onClick={handleSignIn}
                        className="signin-button"
                    >
                        Log In
                    </Button>
                    <Text style={{ textAlign: "center" }}>
                        Not in LMS?{" "}
                        <Link to="/signup" className="signup-link">
                            create an account
                        </Link>
                    </Text>
                </div>
                <div className="signin-image">
                    <img src={image} alt="signin" className="signin-img" />
                </div>
            </div>
        </>
    );
}

export default SignInForm;
