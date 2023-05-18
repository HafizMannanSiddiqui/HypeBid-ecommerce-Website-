import React from 'react'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';

const Order = () => {
    return (
        <>
            <Navbar />

            <div className="profile-card" style={{
                margintop: "20px",
                background: "#eee"
            }}>
                <div className="row">
                    <div className="col-md-3">
                        <div className="profile-account-page-left shadow-sm bg-white h-100">
                            <div className="border-bottom p-4">
                                <div className="profile-user text-center">
                                    <div className="profile-user-media">
                                        <img className="mb-3 rounded-pill shadow-sm mt-1" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="Usman Amjad profile" />
                                        <div className="profile-user-media-body">
                                            <h6 className="mb-2">Usman Shaikh</h6>
                                            <p className="mb-1">+92 304 1289225</p>
                                            <p>l215777@lhr.nu.edu.pk</p>
                                            <p className="mb-0 text-black font-weight-bold"><Link className="text-primary mr-3" data-toggle="modal" data-target="#edit-profile-modal" to="/"><i className="icofont-ui-edit"></i> EDIT</Link></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ul className="nav nav-tabs flex-column border-0 pt-4 pl-4 pb-4" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <Link className="nav-link" id="orders-tab" data-toggle="tab" to="#orders" role="tab" aria-controls="orders" aria-selected="false"><i className="icofont-food-cart"></i> Orders</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="profile-account-page-right shadow-sm bg-white p-4 h-100">
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane  fade  active show" id="orders" role="tabpanel" aria-labelledby="orders-tab">
                                    <h4 className="font-weight-bold mt-0 mb-4">Past Orders</h4>
                                    <div className="bg-white card mb-4 order-list shadow-sm">
                                        <div className="gold-members p-4">
                                            <Link to="#">
                                            </Link>
                                            <div className="media">
                                                <Link to="/">
                                                    <img className="mr-4" src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="person2" />
                                                </Link>
                                                <div className="media-body">
                                                    <Link to="#">
                                                        <span className="float-right text-info">Delivered on Mon, Nov 12, 7:18 PM <i className="icofont-check-circled text-success"></i></span>
                                                    </Link>
                                                    <h6 className="mb-2">
                                                        <Link to="#"></Link>
                                                        <Link to="#" className="text-black">Iphone 11 pro max PTA approved</Link>
                                                    </h6>
                                                    <p className="text-gray mb-1"><i className="icofont-location-arrow"></i> 730 S Mendenhall Rd, Memphis, TN 38117, USA
                                                    </p>
                                                    <p className="text-gray mb-3"><i className="icofont-list"></i> ORDER #25102589748 <i className="icofont-clock-time ml-2"></i> Mon, Nov 12, 6:26 PM</p>
                                                    <p className="text-dark">Iphone 11 pro max PTA Approved, 10/10 condition, water pack.
                                                    </p>
                                                    <hr />
                                                    <div className="float-right">
                                                        <Link className="btn btn-sm btn-outline-primary" to="#"><i className="icofont-headphone-alt"></i> HELP</Link>
                                                        <Link className="btn btn-sm btn-primary" to="#"><i className="icofont-refresh"></i> REORDER</Link>
                                                    </div>
                                                    <p className="mb-0 text-black text-primary pt-2"><span className="text-black font-weight-bold"> Total Paid:</span> $1000
                                                    </p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="bg-white card mb-4 order-list shadow-sm">
                                        <div className="gold-members p-4">
                                            <Link to="#">
                                            </Link>
                                            <div className="media">
                                                <Link to="#">
                                                    <img className="mr-4" src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="Generic placeholder" />
                                                </Link>
                                                <div className="media-body">
                                                    <Link to="#">
                                                        <span className="float-right text-info">Delivered on Mon, Nov 12, 7:18 PM <i className="icofont-check-circled text-success"></i></span>
                                                    </Link>
                                                    <h6 className="mb-2">
                                                        <Link to="#"></Link>
                                                        <Link to="#" className="text-black">Iphone 14 pro max PTA Approved</Link>
                                                    </h6>
                                                    <p className="text-gray mb-1"><i className="icofont-location-arrow"></i> 1733 Ocean Ave, Santa Monica, CA 90401, USA
                                                    </p>
                                                    <p className="text-gray mb-3"><i className="icofont-list"></i> ORDER #25102589748 <i className="icofont-clock-time ml-2"></i> Mon, Nov 12, 6:26 PM</p>
                                                    <p className="text-dark">Iphone 14 pro max PTA Approved, 10/10 condition, water pack (New).
                                                    </p>
                                                    <hr />
                                                    <div className="float-right">
                                                        <Link className="btn btn-sm btn-outline-primary" to="#"><i className="icofont-headphone-alt"></i> HELP</Link>
                                                        <Link className="btn btn-sm btn-primary" to="#"><i className="icofont-refresh"></i> REORDER</Link>
                                                    </div>
                                                    <p className="mb-0 text-black text-primary pt-2"><span className="text-black font-weight-bold"> Total Paid:</span> $1500
                                                    </p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="bg-white card  order-list shadow-sm">
                                        <div className="gold-members p-4">
                                            <Link to="#">
                                            </Link>
                                            <div className="media">
                                                <Link to="#">
                                                    <img className="mr-4" src="https://bootdey.com/img/Content/avatar/avatar4.png" alt="person" />
                                                </Link>
                                                <div className="media-body">
                                                    <Link to="#">
                                                        <span className="float-right text-info">Delivered on Mon, Nov 12, 7:18 PM <i className="icofont-check-circled text-success"></i></span>
                                                    </Link>
                                                    <h6 className="mb-2">
                                                        <Link to="#"></Link>
                                                        <Link to="#" className="text-black">HP Laptop Core i9</Link>
                                                    </h6>
                                                    <p className="text-gray mb-1"><i className="icofont-location-arrow"></i> 953 S Main St, Centerville, OH 45459, USA
                                                    </p>
                                                    <p className="text-gray mb-3"><i className="icofont-list"></i> ORDER #25102589748 <i className="icofont-clock-time ml-2"></i> Mon, Nov 12, 6:26 PM</p>
                                                    <p className="text-dark">Laptop HP
                                                    </p>
                                                    <hr />
                                                    <div className="float-right">
                                                        <Link className="btn btn-sm btn-outline-primary" to="#"><i className="icofont-headphone-alt"></i> HELP</Link>
                                                        <Link className="btn btn-sm btn-primary" to="#"><i className="icofont-refresh"></i> REORDER</Link>
                                                    </div>
                                                    <p className="mb-0 text-black text-primary pt-2"><span className="text-black font-weight-bold"> Total Paid:</span> $1420
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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

export default Order;