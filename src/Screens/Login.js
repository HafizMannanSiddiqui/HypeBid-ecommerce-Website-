import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [data, setData] = useState({
        email: '',
        password: '',
    });

    const toggleShowPassword = () => setShowPassword(!showPassword);

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = data;
        if (!email || !password) {
            alert('Please fill all the fields');
            return;
        }

        const response = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const responseData = await response.json();

        if (response.ok) {
            alert('Login Successful');
            navigate('/CustomerHome');
        } else {
            alert('Invalid email or password');
        }

    };

    return (
        <>
            <Navbar />
            <div className="container" style={{ margin: '20px' }}>
                <form onSubmit={handleSubmit}>
                    <div className="card">
                        <div className="form">
                            <div className="left-side">
                                {[...Array(10)].map((_, index) => (
                                    <span key={index} />
                                ))}
                            </div>
                            <div className="right-side">
                                <div className="signin_form s_form">
                                    <div className="login">
                                        <h2>User Login</h2>
                                    </div>
                                    <div className="input_text">
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            name="email"
                                            value={data.email}
                                            onChange={handleOnChange}
                                            required
                                        />
                                        <i className="fa fa-user"></i>
                                    </div>
                                    <div className="input_text">
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            placeholder="Password"
                                            name="password"
                                            value={data.password}
                                            onChange={handleOnChange}
                                            required
                                            minLength="6"
                                        />
                                        {showPassword ? (
                                            <FaEye onClick={toggleShowPassword} />
                                        ) : (
                                            <FaEyeSlash onClick={toggleShowPassword} />
                                        )}
                                    </div>
                                    <div className="login_btn text-white"     >
                                        <Link to="/customerHome" style={{ width: "600px", height: "70px" }}><button className="login_button" type="submit">
                                            LOGIN
                                        </button></Link>
                                    </div>
                                    <div className="forgot">
                                        <p>
                                            Forgot{' '}
                                            <Link to="/">Email/Password</Link>
                                        </p>
                                    </div>
                                    <hr />
                                    <div className="or" style={{ textAlign: 'center' }}>
                                        <span>OR</span>
                                    </div>
                                    <hr />
                                    <div className="social_login">
                                        <hr />
                                        <button className="btn btn-danger">
                                            <i className="fab fa-google me-2"></i>Login with Google
                                        </button>

                                        <button className="btn btn-primary">
                                            <i className="fab fa-facebook-f me-2"></i>Login with Facebook
                                        </button>
                                        <hr />
                                    </div>

                                    <div className="create">
                                        <Link to="/signup" className="create_acc">
                                            Create your Account <i className="fa fa-long-arrow-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form >
            </div >
            <Footer />
        </>

    );
};

export default Login;