import React, { useState } from "react";
import CustomerNavbar from '../Components/CustomerNavbar';
import Footer from '../Components/Footer';
import { Link } from "react-router-dom";
// import Cards from './MainPost';
import Card from "../Components/Card";


const CardForm = () => {

    const [title, setTitle] = useState("");
    const [postedDate, setPostedDate] = useState("");
    const [description, setDescription] = useState("");
    const [duration, setDuration] = useState("");
    const [guaranteeRequired, setGuaranteeRequired] = useState(false);
    const [spending, setSpending] = useState("");
    const [need, setNeed] = useState(false);
    const [imageUrl, setImageUrl] = useState("");
    const [cardData, setCardData] = useState([]);


    const handleSubmit = (e) => {
        e.preventDefault();
        const newCard = {
            id: cardData.length + 1,
            title: title,
            postedDate: postedDate,
            description: description,
            duration: duration,
            guaranteeRequired: guaranteeRequired,
            spending: spending,
            need: need,
            imageUrl: imageUrl,
        };
        setCardData([...cardData, newCard]);
        setTitle("");
        setPostedDate("");
        setDescription("");
        setDuration("");
        setGuaranteeRequired(false);
        setSpending("");
        setNeed(false);
        setImageUrl("");
    };

    return (
        <>
            <CustomerNavbar />
            <Card cardData={cardData} />
            <div className="Card-Form-Body">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="title">Title:</label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>
                    <br></br>
                    <div>
                        <label htmlFor="postedDate">Posted Date:</label>
                        <input
                            type="date"
                            id="postedDate"
                            value={postedDate}
                            onChange={(e) => setPostedDate(e.target.value)}
                            required
                        />
                    </div>
                    <br></br>
                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                    <br></br>
                    <div style={{ display: "flex" }}>
                        <label htmlFor="duration">Duration:</label>
                        <select
                            id="duration"
                            value={duration}
                            onChange={(e) => setDuration(e.target.value)}
                            required
                        >
                            <option value="">Select a duration</option>
                            <option value="within month">Within a month</option>
                            <option value="1-6 months">1-6 months</option>
                            <option value="more than 6 months">More than 6 months</option>
                        </select>
                        <label style={{ marginLeft: "3rem" }} htmlFor="guaranteeRequired">Guarantee Required:</label>
                        <input
                            type="checkbox"
                            id="guaranteeRequired"
                            checked={guaranteeRequired}
                            onChange={(e) => setGuaranteeRequired(e.target.checked)}
                        /></div>
                    <br></br>
                    <label htmlFor="Spending">Requirements:</label>
                    <input
                        type="text"
                        id="Spending"
                        value={spending}
                        onChange={(e) => setSpending(e.target.value)}
                        required
                    />
                    <br></br>
                    <div> <label htmlFor="need">Posted Date:</label>
                        <input
                            type="checkbox"
                            id="need"
                            value={need}
                            onChange={(e) => setNeed(e.target.checked)}
                        /></div>

                    <br></br>
                    <div><label htmlFor="imageUrl">Image URL:</label>
                        <input
                            type="text"
                            id="imageUrl"
                            value={imageUrl}
                            onChange={(e) => setImageUrl(e.target.value)}
                            required
                        /></div>

                    <button className="btn" type="submit"><Link className="text-white" to="/card">Create Post</Link></button>
                </form >
            </div>
            <Footer />
        </>
    );
};

export default CardForm;
