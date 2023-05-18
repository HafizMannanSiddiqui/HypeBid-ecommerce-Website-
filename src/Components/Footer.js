import React from 'react'
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer-container text-white">
                    <div className="social-media">
                        <Link to="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></Link>
                        <Link to="https://www.twitter.com/"><i className="fab fa-twitter"></i></Link>
                        <Link to="https://www.instagram.com/"><i className="fab fa-instagram"></i></Link>
                    </div>
                    <div className="footer-text">
                        <p>© 2023 HypeBid</p>
                        <p>123 Main Street, Lahore, Pakistan</p>
                    </div>
                </div>
            </footer>

        </>
    )
};

export default Footer;
