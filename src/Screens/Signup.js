import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { FaEye, FaEyeSlash } from "react-icons/fa";

// import { toast } from 'react-hot-toast';

// import { SiFacebook } from 'react-icons/fa';
// const mongoose = require('mongoose');
// const axios = require('axios');



const Signup = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [data, setData] = useState({
        firstname: "",
        lastname: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        address: "",
        phoneNumber: "",
        gender: "",
    });
    console.log(data);
    const toggleShowPassword = () => setShowPassword(!showPassword);
    const toggleShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);


    console.log(process.env.REACT_APP_SERVER_DOMAIN);
    const handleOnChange = async (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { firstname, lastname, username, email, password, confirmPassword, address, phoneNumber, gender } = data;
        if (!firstname || !lastname || !username || !email || !password || !confirmPassword || !address || !phoneNumber || !gender) {
            alert("Please fill all the fields");
            return;
        }
        if (password === confirmPassword) {
            const response = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/signup`, {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(data)
            })

            const dataRes = await response.json();
            console.log(dataRes);


            if (dataRes.alert) {
                alert(dataRes.message);
                navigate("/login");
            } else {
                alert(dataRes.message);
            }
        }
        else {
            alert("Passwords do not match");

        }
    };



    return (
        <>
            <Navbar />
            <div className="container signup" style={{ margin: "20px" }}>
                <div className="card">
                    <div className="form">
                        <div className="left-side">
                            {/* Add comments to explain complex code */}
                            {/* Placeholder for background animation */}
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <form method="POST" action="" onSubmit={handleSubmit}>
                            <div className="right-side signup-right" style={{ width: "674px" }}>
                                <div className="signin_form s_form">
                                    <div className="login">
                                        <h2>User Signup</h2>
                                    </div>
                                    <div className="input_text" style={{ display: "flex", marginRight: "10px", width: "90%", fontSize: "16px" }}>
                                        <input type="text" placeholder="First Name" name="firstname" value={data.firstname} onChange={handleOnChange} required />
                                        <i className="fa fa-user"></i>
                                        <input type="text" placeholder="Last Name" name="lastname" value={data.lastname} onChange={handleOnChange} required />
                                        <i className="fa fa-user"></i>
                                    </div>
                                    <div className="input_text invalid" style={{ display: "flex", marginRight: "10px", width: "90%", fontSize: "16px" }}>
                                        <input type="text" placeholder="Username" pattern="[a-zA-Z]+" value={data.username} name="username" onChange={handleOnChange} required minlength="4" maxlength="16" />
                                        <i className="fa fa-user"></i>
                                        <input type="tel" placeholder="Contact Number" name="phoneNumber" pattern="[0-9]{11}" value={data.phoneNumber} onChange={handleOnChange} required />
                                        <i className="fa fa-user"></i>
                                    </div>
                                    <div className="input_text" style={{ display: "flex", marginRight: "10px", width: "90%", fontSize: "16px" }}>
                                        <input type="text" placeholder="Address" name="address" value={data.address} onChange={handleOnChange} required />
                                        <i className="fa fa-envelope"></i>
                                        <i className="fa fa-eye-slash"></i>
                                        <select type="option" placeholder="Gender" name="gender" value={data.gender} onChange={handleOnChange} required>
                                            <option value="">Select Gender</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="other">Other</option>
                                        </select>
                                        <i className="fa fa-user"></i>
                                        <i className="fa fa-eye-slash"></i>
                                    </div>
                                    <div className="input_text">
                                        <input type="email" placeholder="Email" name="email" value={data.email} onChange={handleOnChange} required />
                                        <i className="fa fa-envelope"></i>
                                        <i className="fa fa-eye-slash"></i>
                                    </div>
                                    <div className="input_text">
                                        <input type={showPassword ? "text" : "password"} placeholder="Password" name="password" value={data.password} onChange={handleOnChange} required minlength="6" />
                                        {showPassword ? (
                                            <FaEye onClick={toggleShowPassword} />
                                        ) : (
                                            <FaEyeSlash onClick={toggleShowPassword} />
                                        )}
                                    </div>
                                    <div className="input_text">
                                        <input
                                            type={showConfirmPassword ? "text" : "password"} placeholder="Confirm Password" name="confirmPassword" value={data.confirmPassword} onChange={handleOnChange}
                                        />
                                        {showConfirmPassword ? (
                                            <FaEye onClick={toggleShowConfirmPassword} />
                                        ) : (
                                            <FaEyeSlash onClick={toggleShowConfirmPassword} />
                                        )}
                                    </div>
                                    <div className="login_btn">
                                        {/* Use onClick event to trigger registration logic */}
                                        <button type="submit">Signup</button>
                                    </div>
                                    <hr />
                                    <div className="social_login">
                                        {/* <SiFacebook /> */}
                                        <button className="btn btn-danger"><i className="fab fa-google me-2"></i>Login with Google</button>
                                        <button className="btn btn-primary"><i className="fab fa-facebook-f me-2"></i>Login with Facebook</button>
                                    </div>
                                    <Link className="signup_link" to="/login">Already have an account? Login here</Link>
                                </div>
                            </div>
                        </form >
                    </div>
                </div >
            </div >

            <Footer />
        </>
    );
}
export default Signup;