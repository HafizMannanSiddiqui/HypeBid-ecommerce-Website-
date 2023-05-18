import './App.css';
import './index';
import About from './Screens/About';
import CustomerHome from './Screens/CustomerHome';
import HomeBeforeLogin from './Screens/HomeBeforeLogin';
import Login from './Screens/Login';
import Order from './Screens/Order';
import Proposal from './Screens/Proposal';
import SellerHome from './Screens/SellerHome';
import SellerProfile from './Screens/SellerProfile';
import Signup from './Screens/Signup';
import CardForm from './Screens/CardForm';
import Card from './Components/Card';
// import toast, { Toaster } from 'react-hot-toast';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import UserProfile from './Screens/UserProfile';

function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<HomeBeforeLogin />} />
            <Route exact path="/SellerHome" element={<SellerHome />} />
            <Route exact path="/customerHome" element={<CustomerHome />} />
            <Route exact path="/cardForm" element={<CardForm />} />
            <Route exact path="/card" element={<Card />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/sellerProfile" element={<SellerProfile />} />
            <Route exact path="/myProfile" element={<UserProfile />} />
            <Route exact path="/order" element={<Order />} />
            <Route exact path="/proposal" element={<Proposal />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;