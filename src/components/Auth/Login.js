import React, { useState } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import toastr from "toastr";
import "toastr/build/toastr.min.css";

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/login', { email, password });
            console.log(response);
            const  token  = response.data.accessToken;
            localStorage.setItem('token', token);
            toastr.success("Đăng nhập thành công")
        } catch (error) {
            toastr.error("Đăng nhập thất bại")
        }
    };
    return (
        <Container fluid className="project-section">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit">Login</button>
            </form>
        </Container>
    );
};

export default Login