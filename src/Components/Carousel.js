import React from 'react'
import { Link } from 'react-router-dom';
import Carousel1 from '../images/Carousel1.png';
import Car2 from '../images/Car2.jpeg';


const Carousel = () => {
    return (
        <>
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="false">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" className="active" aria-current="true" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" className="active" aria-current="true" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Carousel1} alt="Laptop" className="d-block w-100 active" />
                        <div className="container text-start d-none d-md-block">
                            <div className="carousel-caption ">
                                <h1>Example headline.</h1>
                                <p>Some representative placeholder content for the first slide of the carousel.</p>
                                <p><Link className="btn btn-lg btn-primary" to="#">Sign up today</Link></p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item active">
                        <img src={Car2} className="d-block w-100" alt="Office" />
                        <div className="container text-start d-none d-md-block">
                            <div className="carousel-caption ">
                                <h1>Example headline.</h1>
                                <p>Some representative placeholder content for the first slide of the carousel.</p>
                                <p><Link className="btn btn-lg btn-primary" to="#">Sign up today</Link></p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item " >
                        <img src="https://source.unsplash.com/random/768x400/?Mobiles" className="d-block w-100" alt="Mobiles" />
                        <div className="container text-start d-none d-md-block">
                            <div className="carousel-caption ">
                                <h1>Example headline.</h1>
                                <p>Some representative placeholder content for the first slide of the carousel.</p>
                                <p><Link className="btn btn-lg btn-primary" to="#">Sign up today</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div >
        </>
    )
};

export default Carousel;


