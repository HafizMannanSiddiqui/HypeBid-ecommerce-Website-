import React from 'react'
import Navbar from '../Components/Navbar';
import Carousel from '../Components/Carousel';
import Footer from '../Components/Footer';
import Card from '../Components/Card';

const HomeBeforeLogin = () => {
    return (
        <>
            <Navbar />
            <Carousel />
            <Card />
            <Card />
            <Footer />
        </>
    )
}

export default HomeBeforeLogin;
