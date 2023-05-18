import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'

const Proposal = () => {
    return (
        <>
            <Navbar />
            <div className="container-fluid" style={{ margintop: "20px", textalign: "center !important", background: "#eee" }}>
                <div className="container-Proposal text-center">
                    <h1>Thank you.</h1>
                    <p className="lead w-lg-50 mx-auto">Your proposals send to the customers <Link to="/">click here</Link> to send more proposals.</p>
                    <p className="w-lg-50 mx-auto">Your Proposal id is "9237427634826". We will immediatelly send your proposal to the customer. If customer will find good offer he will contact to you.</p>
                </div>
                <div className="container-Proposal">
                    <h2 className="h5 mb-5 text-center">You may also Proposal on these Posts of a different customers</h2>
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="cardP text-center mb-3">
                                <div className="py-5 px-4">
                                    <img src="https://www.bootdey.com/image/280x280/6495ED/000000" alt="" className="img-fluid mb-4" />
                                    <h3 className="fs-6 text-truncate"><Link to="#" className="stretched-link text-reset">Smartphone 5G Black 12GB RAM+512GB NEW</Link></h3>
                                    <span className="text-success">$799.00</span> <del className="text-muted">$650.83</del>
                                </div>
                                <div className="bg-danger text-white small position-absolute end-0 top-0 px-2 py-2 lh-1 text-center">
                                    <span className="d-block">10%</span>
                                    <span className="d-block">OFF</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="cardP text-center position-relative mb-3">
                                <div className="py-5 px-4">
                                    <img src="https://www.bootdey.com/image/280x280/FFB6C1/000000" alt="" className="img-fluid mb-4" />
                                    <h3 className="fs-6 text-truncate"><Link to="#" className="stretched-link text-reset">Wireless Headphones with Noise Cancellation Tru Bass Bluetooth HiFi</Link></h3>
                                    <span className="text-success">$250.00</span> <del className="text-muted">$250</del>
                                </div>
                                <div className="bg-danger text-white small position-absolute end-0 top-0 px-2 py-2 lh-1 text-center">
                                    <span className="d-block">25%</span>
                                    <span className="d-block">OFF</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="cardP text-center mb-3">
                                <div className="py-5 px-4">
                                    <img src="https://www.bootdey.com/image/280x280/008B8B/000000" alt="" className="img-fluid mb-4" />
                                    <h3 className="fs-6 text-truncate"><Link to="#" className="stretched-link text-reset">Smartwatch IP68 Waterproof GPS and Bluetooth Support</Link></h3>
                                    <span className="text-success">$29.00</span> <del className="text-muted">$14.50</del>
                                </div>
                                <div className="bg-danger text-white small position-absolute end-0 top-0 px-2 py-2 lh-1 text-center">
                                    <span className="d-block">50%</span>
                                    <span className="d-block">OFF</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="cardP text-center mb-3">
                                <div className="py-5 px-4">
                                    <img src="https://www.bootdey.com/image/280x280/00CED1/000000" alt="" className="img-fluid mb-4" />
                                    <h3 className="fs-6 text-truncate"><Link to="#" className="stretched-link text-reset">Men's Running Shoes</Link></h3>
                                    <span className="text-success">$110.00</span> <del className="text-muted">$85.23</del>
                                </div>
                                <div className="bg-danger text-white small position-absolute end-0 top-0 px-2 py-2 lh-1 text-center">
                                    <span className="d-block">25%</span>
                                    <span className="d-block">OFF</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}
export default Proposal;
