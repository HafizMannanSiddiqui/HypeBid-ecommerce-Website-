import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {


    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark bg-success" style={{ backgroundColor: 'green' }}>
                <div className="container-fluid">
                    <Link className="navbar-brand text-white fs-2" to="/login">HypeBid</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active text-white fs-5" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white fs-5" to="/order">Orders</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white fs-5" to="/proposal">Proposals</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white fs-5" to="/about">About us</Link>
                            </li>
                        </ul>
                        <Link className="btn btn-outline-white fs-7 text-white" type="submit" style={{ marginRight: '10px' }} to="/login">Login</Link>
                        <Link className="btn btn-outline-white fs-7 text-white" type="submit" to="/signup">Signup</Link>
                    </div>
                </div>
            </nav>


        </>
    )
}

export default Navbar;
