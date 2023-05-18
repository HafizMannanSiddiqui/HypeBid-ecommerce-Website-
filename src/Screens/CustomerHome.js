import React from 'react';
import Carousel from '../Components/Carousel';
import Footer from '../Components/Footer';
import Card from '../Components/Card';
import CustomerNavbar from '../Components/CustomerNavbar';

const CustomerHome = () => {
    return (
        <>
            <CustomerNavbar />
            <Carousel />
            <Card />
            <Footer />
        </>
    )
}

export default CustomerHome;
