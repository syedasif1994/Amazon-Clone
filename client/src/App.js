import React, { useEffect, useState } from "react"
import './App.css';
import Header from './component/Header';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Checkout from "./component/Checkout"
import Footer from "./component/Footer";
import Login from "./component/Login";
import Payment from "./component/Payment";
import Orderlist from "./component/Orderlist";
import Prime from "./component/Prime";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { auth } from './component/firebase-config'
import { onAuthStateChanged } from "firebase/auth"
import { useStateValue } from './StateProvider';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

const stripePromise = loadStripe("pk_test_51LehpOSGZZWN5XcThg2HuaPBgcjZHcgauMnM6RCVtWUEbUEB5ZUWbmffGRQHC0012rOhgRlG7WWBgEXaizxs3vec00oCRSkALY")

function App() {

  const [dispatch] = useStateValue();
  const [user, SetUser] = useState({})

  useEffect(() => {
    onAuthStateChanged(auth, currentUser => {
      SetUser(currentUser)
      if (currentUser) {
        dispatch({
          type: "SET_USER",
          user: currentUser
        })
      } else {
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
  })

  return (
    <>
      <Router>
        <div className='app'>
          <Header userStatus={user} />
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/orderlist" element={<Orderlist />} />
            <Route path="/prime" element={<Prime />} />
            <Route path="/checkout" element={<Checkout user={user} />} />
            <Route path="/payment" element={<Elements stripe={stripePromise} > <Payment user={user} /> </Elements>} />
          </Routes>

          <Footer />
        </div>
      </Router>

    </>
  );
}

export default App;
