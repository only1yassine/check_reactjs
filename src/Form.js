import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './Form.css';

function FormComponent() {
const [email, setEmail] = React.useState('');
const [password, setPassword] = React.useState('');
const [showPassword, setShowPassword] = React.useState(false);
const [isLoading, setIsLoading] = React.useState(false);

const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
    setIsLoading(false);
    alert(`Logged in with email ${email} and password ${password}`);
    }, 2000);
};

const handlePasswordToggle = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
};

return (
    <Form className="custom-form" onSubmit={handleSubmit}>
    <h2>Login</h2>
    <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
        <Form.Text className="text-muted">
        We'll never share your email with anyone else.
        </Form.Text>
    </Form.Group>

    <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <div className="password-input">
        <Form.Control
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <i
            className={`password-toggle ${showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'}`}
            onClick={handlePasswordToggle}
        />
        </div>
    </Form.Group>

    <Button variant="primary" type="submit" disabled={isLoading}>
        {isLoading ? <i className="fas fa-spinner fa-spin" /> : 'Submit'}
    </Button>
    </Form>
);
}

export default FormComponent;
