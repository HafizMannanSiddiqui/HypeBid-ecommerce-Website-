import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Iphone from '../images/iphone.png'

const Card = ({ cardData }) => {

    function JobDescription({ description }) {
        const [showFullText, setShowFullText] = useState(false);
        const text = description;
        const wordsLimit = 25; // change this to the desired number of words

        const toggleText = () => {
            setShowFullText(!showFullText);
        };

        let displayText = text.split(" ").splice(0, wordsLimit).join(" ");
        if (!showFullText) {
            displayText += "...";
        } else {
            displayText = text;
        }

        return (
            <p
                data-qa="job-description"
                style={{ marginBottom: "0px" }}
                className="mt-0 pt-0 mb-20 job-description"
            >
                {displayText}
                {text.split(" ").length > wordsLimit && (
                    <button
                        onClick={toggleText}
                        style={{
                            background: "none",
                            border: "none",
                            color: "blue",
                            cursor: "pointer",
                            marginLeft: "5px"
                        }}
                    >
                        {showFullText ? "See less" : "See more"}
                    </button>
                )}
            </p>
        );
    }

    return (
        <>
            {/* <section className="main-card--container">
                {cardData.map((curElem) => {
                    const { name, title, postedDate, description, duration, guaranteeRequired, spending, need, imageUrl } = curElem; */}

            {/* key={curElem.id}
            {name}, {title}, {postedDate}, {need}, {spending}, {duration}, {guaranteeRequired}, description={description},
            {imageUrl}
             */}

            <div className="job-tile-content" >
                <div className="d-flex align-items-start card-title">
                    <img className="me-2 avatar-sm rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar4.png" alt="Generic placeholder" />
                    <div className="w-100">
                        <Link to="/sellerProfile" className="text-muted font-13 d-inline-block mt-2"><h4>Usman</h4></Link>
                    </div>
                </div>
                <div className="col-4 card-title">
                    <h3>Laptop</h3>
                    <small className="text-muted">Posted 21st April</small> <br></br>
                    <small className="text-muted vs-font-bold"><strong>Urgent Need</strong></small>
                </div>
                <div className="row card-body">
                    <p className="col-4" id="Spending"><strong>Spend</strong><br /><span className="text-muted" style={{ width: "218px !important" }}>$1000+</span></p>
                    <p data-qa="duration" className="col-4 "><strong data-qa="value">Duration</strong><br /><span className="text-muted">Within Month</span></p>
                    <p className="col-4"><strong data-qa="value">Certified<i className="fa-sharp fa-solid fa-certificate" style={{ color: "#3584e4" }} /></strong><br /><span data-qa="text" className="text-muted">Guarantee</span></p>
                    <div className="col-12">
                        <h5>Description</h5>
                        <JobDescription description="The sun was shining brightly, casting a warm glow over the countryside. Birds chirped merrily in the trees, flitting from branch to branch. A gentle breeze rustled the leaves, creating a soothing sound. In the distance, a river flowed lazily, reflecting the colors of the sky. The air was filled with the sweet fragrance of blooming flowers. A small rabbit hopped across the field, stopping to nibble on some fresh greens. A lone cloud floated overhead, casting a fleeting shadow on the ground. It was a beautiful day, full of life and vitality. And in this peaceful moment, all was right with the world." />
                    </div>
                </div>
                <div>
                    <div aria-busy="false" aria-label="Section is loading" role="status" className="card-body">
                        <img src={Iphone} alt="mobiles" />
                    </div>
                </div>
                <div className="skills-list mb-2">
                    <button><Link className="btn btn-proposal text-white" type="submit" style={{ marginRight: '50px' }} to="/Proporsal">Submit Proposal</Link></button>
                </div>
            </div >
            {/* )
                })};
        </section > */}
        </>
    );
};
export default Card;


