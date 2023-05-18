import React from 'react'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';

const CustomerProfile = () => {
    return (
        <>
            <Navbar />

            <div class="containerP " style={{
                backgroundcolor: "#ecf2f5",
                margintop: "20px"
            }}>
                <div class="row">
                    <div class="col-xl-12">
                        <div class="cardP">
                            <div class="card-body">
                                <div class="dropdown float-end">
                                    <Link to="#" class="dropdown-toggle arrow-none card-drop" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="bi bi-dots-vertical"></i>
                                    </Link>
                                    <div class="dropdown-menu dropdown-menu-end">
                                        {/* <!-- item--> */}
                                        <Link to="javascrip" class="dropdown-item">Edit</Link>
                                        {/* <!-- item--> */}
                                        <Link to="javascrip" class="dropdown-item">Delete</Link>
                                        {/* <!-- item--> */}
                                        <Link to="javascrip" class="dropdown-item">Block</Link>
                                    </div>
                                </div>
                                <div class="d-flex align-items-start">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png" class="rounded-circle avatar-lg img-thumbnail" alt="profile-" />
                                    <div class="w-100 ms-3">
                                        <h4 class="my-0">Geneva McKnight <i class="bi bi-check-decagram text-info ms-1"></i>
                                        </h4>
                                        <p class="text-muted">@webdesigner</p>
                                        <button type="button" class="btn btn-soft-primary btn-xs waves-effect mb-2 waves-light">Follow</button>
                                        <button type="button" class="btn btn-soft-success btn-xs waves-effect mb-2 waves-light">Message</button>
                                    </div>
                                </div>

                                <div class="mt-3">
                                    <h4 class="font-13 text-uppercase">About Me :</h4>
                                    <p class="text-muted font-13 mb-3">
                                        Hi I'm Johnathn Deo,has been the industry's standard dummy text ever since the 1500s, when an unknown printer took Link galley of type.
                                    </p>
                                    <p class="text-muted mb-2 font-13"><strong>Full Name :</strong> <span class="ms-2">Geneva D. McKnight</span></p>

                                    <p class="text-muted mb-2 font-13"><strong>Mobile :</strong><span class="ms-2">(123) 123 1234</span></p>

                                    <p class="text-muted mb-2 font-13"><strong>Email :</strong> <span class="ms-2">user@email.domain</span></p>

                                    <p class="text-muted mb-1 font-13"><strong>Location :</strong> <span class="ms-2">USA</span></p>
                                </div>

                                <ul class="social-list list-inline mt-3 mb-0">
                                    <li class="list-inline-item">
                                        <Link to="//wa.me" class="social-list-item text-center border-primary text-primary"><i class="bi bi-facebook"></i></Link>
                                    </li>
                                    <li class="list-inline-item">
                                        <Link to="//wa.me" class="social-list-item text-center border-danger text-danger"><i class="bi bi-google"></i></Link>
                                    </li>
                                    <li class="list-inline-item">
                                        <Link to="//wa.me" class="social-list-item text-center border-info text-info"><i class="bi bi-twitter"></i></Link>
                                    </li>
                                    <li class="list-inline-item">
                                        <Link to="//wa.me" class="social-list-item text-center border-secondary text-secondary"><i class="bi bi-github"></i></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* <!-- end card --> */}

                        <div class="card">
                            <div class="card-body text-center">
                                <div class="row">
                                    <div class="col-4 border-end border-light">
                                        <h5 class="text-muted mt-1 mb-2 fw-normal">Applied</h5>
                                        <h2 class="mb-0 fw-bold">116</h2>
                                    </div>
                                    <div class="col-4 border-end border-light">
                                        <h5 class="text-muted mt-1 mb-2 fw-normal">Reviewed</h5>
                                        <h2 class="mb-0 fw-bold">87</h2>
                                    </div>
                                    <div class="col-4">
                                        <h5 class="text-muted mt-1 mb-2 fw-normal">Contacted</h5>
                                        <h2 class="mb-0 fw-bold">98</h2>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-body">
                                <h4 class="header-title mb-3">Inbox</h4>

                                <div class="inbox-widget" data-simplebar="init" style={{ maxheight: "150px;" }}><div class="simplebar-wrapper" style={{ margin: "0px" }}><div class="simplebar-height-auto-observer-wrapper"><div class="simplebar-height-auto-observer"></div></div><div class="simplebar-mask"><div class="simplebar-offset" style={{ right: "0px", bottom: "0px" }}><div class="simplebar-content-wrapper" style={{ height: "auto", overflow: "hidden scroll" }}><div class="simplebar-content" style={{ padding: "0px" }}>
                                    <div class="d-flex align-items-center pb-1" id="tooltips-container">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar2.png" class="rounded-circle img-fluid avatar-md img-thumbnail bg-transparent" alt="" />
                                        <div class="w-100 ms-3">
                                            <h5 class="mb-1">Tomaslau</h5>
                                            <p class="mb-0 font-13">I've finished it! See you so...</p>
                                        </div>
                                        <Link to="//wa.me" class="btn btn-sm btn-soft-info font-13" data-bs-container="#tooltips-container" data-bs-toggle="tooltip" data-bs-placement="left" title="" data-bs-original-title="Reply"> <i class="bi bi-reply"></i> </Link>
                                    </div>
                                    <div class="d-flex align-items-center py-1" id="tooltips-container1">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png" class="rounded-circle img-fluid avatar-md img-thumbnail bg-transparent" alt="" />
                                        <div class="w-100 ms-3">
                                            <h5 class="mb-1">Stillnotdavid</h5>
                                            <p class="mb-0 font-13">This theme is awesome!</p>
                                        </div>
                                        <Link to="//wa.me" class="btn btn-sm btn-soft-info font-13" data-bs-container="#tooltips-container1" data-bs-toggle="tooltip" data-bs-placement="left" title="" data-bs-original-title="Reply"> <i class="bi bi-reply"></i> </Link>
                                    </div>
                                    <div class="d-flex align-items-center py-1" id="tooltips-container2">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar4.png" class="rounded-circle img-fluid avatar-md img-thumbnail bg-transparent" alt="" />
                                        <div class="w-100 ms-3">
                                            <h5 class="mb-1">Shahedk</h5>
                                            <p class="mb-0 font-13">Hey! there I'm available...</p>
                                        </div>
                                        <Link to="//wa.me" class="btn btn-sm btn-soft-info font-13" data-bs-container="#tooltips-container2" data-bs-toggle="tooltip" data-bs-placement="left" title="" data-bs-original-title="Reply"> <i class="bi bi-reply"></i> </Link>
                                    </div>
                                    <div class="d-flex align-items-center py-1" id="tooltips-container3">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar5.png" class="rounded-circle img-fluid avatar-md img-thumbnail bg-transparent" alt="" />
                                        <div class="w-100 ms-3">
                                            <h5 class="mb-1">Kurafire</h5>
                                            <p class="mb-0 font-13">Nice to meet you</p>
                                        </div>
                                        <Link to="//wa.me" class="btn btn-sm btn-soft-info font-13" data-bs-container="#tooltips-container3" data-bs-toggle="tooltip" data-bs-placement="left" title="" data-bs-original-title="Reply"> <i class="bi bi-reply"></i> </Link>
                                    </div>
                                    <div class="d-flex align-items-center py-1" id="tooltips-container4">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar6.png" class="rounded-circle img-fluid avatar-md img-thumbnail bg-transparent" alt="" />
                                        <div class="w-100 ms-3">
                                            <h5 class="mb-1">Adhamdannaway</h5>
                                            <p class="mb-0 font-13">This theme is awesome!</p>
                                        </div>
                                        <Link to="//wa.me" class="btn btn-sm btn-soft-info font-13" data-bs-container="#tooltips-container4" data-bs-toggle="tooltip" data-bs-placement="left" title="" data-bs-original-title="Reply"> <i class="bi bi-reply"></i> </Link>
                                    </div>
                                    <div class="d-flex align-items-center py-1" id="tooltips-container5">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" class="rounded-circle img-fluid avatar-md img-thumbnail bg-transparent" alt="" />
                                        <div class="w-100 ms-3">
                                            <h5 class="mb-1">Tomaslau</h5>
                                            <p class="mb-0 font-13">I've finished it! See you so...</p>
                                        </div>
                                        <Link to="//wa.me" class="btn btn-sm btn-soft-info font-13" data-bs-container="#tooltips-container5" data-bs-toggle="tooltip" data-bs-placement="left" title="" data-bs-original-title="Reply"> <i class="bi bi-reply"></i> </Link>
                                    </div>
                                    <div class="d-flex align-items-center py-1" id="tooltips-container6">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar8.png" class="rounded-circle img-fluid avatar-md img-thumbnail bg-transparent" alt="" />
                                        <div class="w-100 ms-3">
                                            <h5 class="mb-1">Sana</h5>
                                            <p class="mb-0 font-13">Hey! there I'm available...</p>
                                        </div>
                                        <Link to="//wa.me" class="btn btn-sm btn-soft-info font-13" data-bs-container="#tooltips-container6" data-bs-toggle="tooltip" data-bs-placement="left" title="" data-bs-original-title="Reply"> <i class="bi bi-reply"></i> </Link>
                                    </div>
                                    <div class="d-flex align-items-center pt-1" id="tooltips-container7">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar5.png" class="rounded-circle img-fluid avatar-md img-thumbnail bg-transparent" alt="" />
                                        <div class="w-100 ms-3">
                                            <h5 class="mb-1">Stillnotdavid</h5>
                                            <p class="mb-0 font-13">This theme is awesome!</p>
                                        </div>
                                        <Link to="//wa.me" class="btn btn-sm btn-soft-info font-13" data-bs-container="#tooltips-container7" data-bs-toggle="tooltip" data-bs-placement="left" title="" data-bs-original-title="Reply"> <i class="bi bi-reply"></i> </Link>
                                    </div>
                                </div></div></div></div><div class="simplebar-placeholder" style={{ width: "auto", height: "10px" }}></div></div><div class="simplebar-track simplebar-horizontal" style={{ visibility: "hidden" }}><div class="simplebar-scrollbar" style={{ width: "0px", display: "none" }}></div></div><div class="simplebar-track simplebar-vertical" style={{ visibility: "visible" }}><div class="simplebar-scrollbar" style={{ height: "10px", transform: "translate3d(0px, 0px, 0px)", display: "block" }}></div></div></div>
                                {/* <!-- end inbox-widget --> */}
                            </div>
                        </div>
                        {/* <!-- end card--> */}

                    </div>
                    {/* <!-- end col--> */}

                    <div class="col-xl-12">
                        <div class="card">
                            <div class="card-body">

                                {/* <!-- Story Box--> */}
                                <div class="border border-light p-2 mb-3">
                                    <div class="d-flex align-items-start">
                                        <img class="me-2 avatar-sm rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar4.png" alt="Generic placeholder " />
                                        <div class="w-100">
                                            <h5 class="">Sarim <small class="text-muted"> 1 hour ago</small></h5>
                                            <div class="">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit pariatur minus className="mb-20ad soluta excepturi quam, quas molestias veniam eligendi hic fuga voluptas delectus aut voluptatum earum nihil saepe, quia ducimus.
                                                <br></br>
                                                <Link to="//wa.me" class="text-muted font-13 d-inline-block mt-2"><i class="bi bi-reply"></i> Reply</Link>
                                            </div>
                                        </div>

                                    </div>


                                    <div class="post-user-comment-box">
                                        <div class="d-flex align-items-start">
                                            <img class="me-2 avatar-sm rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="Generic placeholder " />
                                            <div class="w-100">
                                                <h5 class="mt-0">Jeremy Tomlinson <small class="text-muted">3 hours ago</small></h5>
                                                Nice work, makes me think of The Money Pit.
                                                <br></br>

                                                <Link to="//wa.me" class="text-muted font-13 d-inline-block mt-2"><i class="bi bi-reply"></i> Reply</Link>

                                                <div class="d-flex align-items-start mt-3">
                                                    <Link class="pe-2" to="#">
                                                        <img src="https://bootdey.com/img/Content/avatar/avatar4.png" class="avatar-sm rounded-circle" alt="Generic placeholder " />
                                                    </Link>
                                                    <div class="w-100">
                                                        <h5 class="mt-0">Kathleen Thomas <small class="text-muted">5 hours ago</small></h5>
                                                        i'm in the middle of Link timelapse animation myself! (Very different though.) Awesome stuff.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="d-flex align-items-start mt-2">
                                            <Link class="pe-2" to="#">
                                                <img src="https://bootdey.com/img/Content/avatar/avatar1.png" class="rounded-circle" alt="Generic placeholder " height="31" />
                                            </Link>
                                            <div class="w-100">
                                                <input type="text" id="simpleinput" class="form-control border-0 form-control-sm" placeholder="Add comment" />
                                            </div>
                                        </div>
                                    </div>

                                    <div class="mt-2">
                                        <Link to="//wa.me" class="btn btn-sm btn-link text-danger"><i class="bi bi-heart"></i> Like (28)</Link>
                                        <Link to="//wa.me" class="btn btn-sm btn-link text-muted"><i class="bi bi-share-variant"></i> Share</Link>
                                    </div>
                                </div>

                                {/* <!-- Story Box--> */}
                                <div class="border border-light p-2 mb-3">
                                    <div class="d-flex align-items-start">
                                        <img class="me-2 avatar-sm rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="Generic placeholder " />
                                        <div class="w-100">
                                            <h5 class="m-0">Jeremy Tomlinson</h5>
                                            <p class="text-muted"><small>about 2 minuts ago</small></p>
                                        </div>
                                    </div>
                                    <p>Story based around the idea of time lapse, animation to post soon!</p>

                                    <img src="https://source.unsplash.com/random/768x400/?Mobiles" alt="post-img" class="rounded me-1" height="60" />
                                    <img src="https://source.unsplash.com/random/768x400/?Iphone" alt="post-img" class="rounded me-1" height="60" />
                                    <img src="https://source.unsplash.com/random/768x400/?Samsung" alt="post-img" class="rounded" height="60" />

                                    <div class="mt-2">
                                        <Link to="//wa.me" class="btn btn-sm btn-link text-muted"><i class="bi bi-reply"></i> Reply</Link>
                                        <Link to="//wa.me" class="btn btn-sm btn-link text-muted"><i class="bi bi-heart-outline"></i> Like</Link>
                                        <Link to="//wa.me" class="btn btn-sm btn-link text-muted"><i class="bi bi-share-variant"></i> Share</Link>
                                    </div>
                                </div>

                                {/* <!-- Story Box--> */}
                                <div class="border border-light p-2 mb-3">
                                    <div class="d-flex align-items-start">
                                        <img class="me-2 avatar-sm rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="Generic placeholder " />
                                        <div class="w-100">
                                            <h5 class="m-0">Jawwad</h5>
                                            <p class="text-muted"><small>15 hours ago</small></p>
                                        </div>
                                    </div>
                                    <p>The parallax is Link little odd but O.o that house build is awesome!!</p>

                                    <iframe src="https://player.vimeo.com/video/87993762" height="300" class="img-fluid border-0"></iframe>
                                </div>

                                <div class="text-center">
                                    <Link to="javascrip" class="text-danger"><i class="bi bi-spin bi-loading me-1"></i> Load more </Link>
                                </div>
                            </div>
                            {/* </div> <!-- end card--> */}

                            {/* </div> <!-- end col --> */}
                        </div>
                        {/* <!-- end row--> */}

                    </div>
                </div>
            </div >


            <Footer />
        </>
    );
}

export default CustomerProfile;
