import React from 'react';
import Carousel from '../Components/Carousel';
import Footer from '../Components/Footer';
import Card from '../Components/Card';
import SellerNavbar from '../Components/SellerNavbar';
// import CardForm from './CardForm';

const SellerHome = () => {
    return (
        <>
            <SellerNavbar />
            <Carousel />
            <Card />
            <Card />
            <Card />
            <Footer />
        </>
    )
}

export default SellerHome;
