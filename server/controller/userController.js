import user from '../models/userModels.js';


//create new User
const registerUser = async (req, res) => {
    const { firstname, lastname, username, email, password, address, phoneNumber } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const { firstname, lastname, username, email, password, confirmPassword, address, phoneNumber } = req.body;

        const newUser = new User({
            firstname: firstname,
            lastname: lastname,
            username: username,
            email: email,
            password: password,
            confirmPassword: confirmPassword,
            address: address,
            phoneNumber: phoneNumber,
        });
        await newUser.save();

        res.status(201).json({ message: 'User created successfully' });
    } catch (err) {
        console.log('Error creating user', err);
        res.status(500).json({ message: 'Internal server error' });
    }
};

//login 
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return res.status(400).json({ message: 'User does not exist' });
        }

        const isPasswordValid = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid password' });
        }

        const token = jwt.sign({ id: existingUser._id }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });

        res.status(200).json({ message: 'User logged in successfully', token });
    } catch (err) {
        console.log('Error logging in user', err);
        res.status(500).json({ message: 'Internal server error' });
    }
};

//logout user
const logoutUser = async (req, res) => {
    try {
        res.status(200).json({ message: 'User logged out successfully' });
    } catch (err) {
        console.log('Error logging out user', err);
        res.status(500).json({ message: 'Internal server error' });
    }
};

//get all users
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        console.log('Error getting all users', err);
        res.status(500).json({ message: 'Internal server error' });
    }
};

//get user by id
const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch (err) {
        console.log('Error getting user by id', err);
        res.status(500).json({ message: 'Internal server error' });
    }
};

//update user by id
const updateUserById = async (req, res) => {
    const { id } = req.params;
    const { firstname, lastname, username, email, password, confirmPassword, address, phoneNumber } = req.body;
    try {
        const user = await User.findByIdAndUpdate(id, {
            firstname: firstname,
            lastname: lastname,
            username: username,
            email: email,
            password: password,
            confirmPassword: confirmPassword,
            address: address,
            phoneNumber: phoneNumber,
        });
        res.status(200).json(user);
    } catch (err) {
        console.log('Error updating user by id', err);
        res.status(500).json({ message: 'Internal server error' });
    }
};

//delete user by id
const deleteUserById = async (req, res) => {
    const { id } = req.params;
    try {
        await User.findByIdAndDelete(id);
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (err) {
        console.log('Error deleting user by id', err);
        res.status(500).json({ message: 'Internal server error' });
    }
};


// get user profile
const getUserProfile = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch (err) {
        console.log('Error getting user profile', err);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export { registerUser, register, loginUser, logout, logoutUser, register, getAllUsers, getUserById, deleteUserById, deleteUser, updateUserById, deleteUser, getUserProfile };

