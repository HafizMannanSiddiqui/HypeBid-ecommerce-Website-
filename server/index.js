// import dependencies
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

// initialize the express app
const app = express();
app.use(express.json());

// load environment variables from .env file
dotenv.config();

// set up middlewares
app.use(cors());
app.use(bodyParser.json());

// call the database connection function
// Connect to MongoDB
const db = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB Connected successfully to the ${conn.connection.host}`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
};

//call db 
db();

// Define the user schema
const userSchema = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    confirmPassword: { type: String, required: true },
    address: { type: String, required: true },
    phoneNumber: { type: String, required: true },
});

// Create a user model using the schema
const userModel = mongoose.model("users", userSchema);


//define the post schema    
import { Schema, model } from "mongoose";

const postSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    postedDate: {
        type: Date,
        default: Date.now
    },
    description: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    guaranteeRequired: {
        type: Boolean,
        required: true
    },
    spending: {
        type: Number,
        required: true
    },
    need: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const post = model("post", postSchema);



// set up routes
app.get('/', (req, res) => {
    console.log(req.params.id);
    res.send('Welcome to HypeBid API');
});

// handle POST requests to '/signup'
app.post('/signup', async (req, res) => {
    console.log(req.body);
    const { email } = req.body;

    userModel.findOne({ email: email })
        .then(result => {
            console.log(result);
            if (result) {
                alert({ message: "Email id is already registered.", alert: false });
            } else {
                const data = userModel(req.body);
                const save = data.save();
                res.send({ message: "Welcome, Successfully Sign up..!!", alert: true })
            }
        })
        .catch(err => console.log(err));
});

// Route handler for POST request to '/login'
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    // Check if email and password are provided
    if (!email || !password) {
        return res.status(400).json({ message: 'Please provide email and password' });
    }

    // Find user by email
    const user = await user.findOne({ email: email });

    // If user not found, return error
    if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Compare password with password in database
    if (password !== user.password) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }

    // If email and password are correct, return success message and user data
    return res.status(200).json({ message: 'Login successful', user });
});


// Create a new post
app.post('/post', async (req, res) => {
    try {
        const { name, title, description, duration, guaranteeRequired, spending, need, imageUrl } = req.body;
        const post = new post({
            name,
            title,
            description,
            duration,
            guaranteeRequired,
            spending,
            need,
            imageUrl
        });
        const savedPost = await post.save();
        res.status(201).json(savedPost);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// set up port
const PORT = process.env.PORT || 8080;

// start the server
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
