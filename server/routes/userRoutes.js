import { Express } from "express";

const router = express.Router();

//register New User
router.post('/createUser', registerUser);

//login User
router.post('/loginUser', loginUser);

//logout User
router.post('/logoutUser', logoutUser); fir

//get User Profile
router.get('/getUserProfile', getUserProfile);

//update User by id 
router.post('/updateUserById', updateUserById);

//delete User by id
router.post('/deleteUserById', deleteUserById);

//get user by id
router.get('/getUserById/:id', getUserById);

//get all users 
router.get('/getAllUsers', getAllUsers);



export default router;
