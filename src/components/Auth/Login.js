import React, { useState } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://8s584j-8080.preview.csb.app/login', { email, password });
            console.log(response);
            const  token  = response.data.accessToken;
            localStorage.setItem('token', token);
            toastr.success("Đăng nhập thành công")
            navigate('/admin/projects')
        } catch (error) {
            toastr.error("Đăng nhập thất bại")
        }
    };
    return (
        // <Container fluid className="project-section">
        //     <Container>
        //         <Form onSubmit={handleSubmit}>
        //             <Form.Group className="mb-3" controlId="formBasicEmail">
        //                 <Form.Label>Email address</Form.Label>
        //                 <Form.Control type="email" placeholder="Enter email" className='w-25'/>
        //                 <Form.Text className="text-muted">
        //                 We'll never share your email with anyone else.
        //                 </Form.Text>
        //             </Form.Group>

        //             <Form.Group className="mb-3" controlId="formBasicPassword">
        //                 <Form.Label>Password</Form.Label>
        //                 <Form.Control type="password" placeholder="Password" className='w-25'/>
        //             </Form.Group>
        //             <Form.Group className="mb-3" controlId="formBasicCheckbox">
        //                 <Form.Check type="checkbox" label="Check me out" />
        //             </Form.Group>
        //             <Button variant="primary" type="submit">
        //                 Submit
        //             </Button>
        //         </Form>
        //     </Container>
        // </Container>
        <Container fluid className="project-section">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email" >Email:</label>
                    <input  
                        type="email" 
                        id="email" 
                        value={email} 
                        className='w-25'
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input 
                        type="password" 
                        id="password" 
                        value={password} 
                        className='w-25'
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                </div>
                <button type="submit" variant="outline-success">Login</button>
            </form>
        </Container>
    );
};

export default Login