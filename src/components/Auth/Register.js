import React, { useState } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import toastr from "toastr";
import "toastr/build/toastr.min.css";
// import { register } from '../../api/auth';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const { username, email, password } = formData;

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async (e) => {
        e.preventDefault();

        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const body = JSON.stringify({ username, email, password });
        try {
            // const res = await axios.post('http://localhost:3001/users/signup', body, config);
            await axios.post('http://localhost:3001/users/signup', body, config);
            toastr.success("Đăng ký thành công")
            // navigate("/admin/projects")
        } catch (err) {
            toastr.error("Đăng ký thất bại")
        }
    };

    return (
        <Container fluid className="project-section">
            <form onSubmit={(e) => onSubmit(e)}>
                <label>Username</label>
                <input
                    type='text'
                    name='username'
                    value={username}
                    onChange={(e) => onChange(e)}
                />
                <label>Email</label>
                <input
                    type='email'
                    name='email'
                    value={email}
                    onChange={(e) => onChange(e)}
                />
                <label>Password</label>
                <input
                    type='password'
                    name='password'
                    value={password}
                    onChange={(e) => onChange(e)}
                />
                <button type='submit'>Signup</button>
            </form>
        </Container>
    );
};

export default Register;