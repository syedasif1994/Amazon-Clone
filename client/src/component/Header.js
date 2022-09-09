import React from 'react'
import "./header.css"
import Logo from "../assests/image/logo.png"
import { SearchOutlined, ShoppingBasket } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { useStateValue } from '../StateProvider'
import { auth } from './firebase-config'
import {signOut} from "firebase/auth"


function Header({userStatus}) {

const [{cart}]=useStateValue();

const handleLogout = async () => {
if(userStatus){
    await signOut(auth)
}
  }

    return (
        <div className="header">
            {/* ----------------- Section 01: Header_Brand  ----------------- */}
            <div className="header_brand">
                <Link to="/">
                    <img className="header_logo" src={Logo} alt='Asif' />
                </Link>

            </div>

            {/* ----------------- Section 02: Header_Search  ----------------- */}
            <div className="header_search">
                <input type="text" name="search" />
                <SearchOutlined className='header_searchIcon' />
            </div>

            {/* ----------------- Section 03: Header_Nav ----------------- */}
            <div className="header_nav">
                <div className="header_navMain">
                    <span className="nav_contentOne">Hello {userStatus? userStatus.email: "Guest"}</span>
                    <Link to={!userStatus && "/login"}>
                    <span className="nav_contentTwo" onClick={handleLogout}>{userStatus ? "Sign out":"Sign in"}</span>
                    </Link>
                </div>
                <Link to="/orderlist">
                <div className="header_navMain">
                    <span className="nav_contentOne">Returns</span>
                    <span className="nav_contentTwo">& Order</span>
                </div>
                </Link>
                <Link to="/prime">
                <div className="header_navMain">
                    <span className="nav_contentOne">Your</span>
                    <span className="nav_contentTwo">Prime</span>
                </div>
                </Link>
                <Link to="/checkout">
                    <div className="header_navIcon">
                        <ShoppingBasket />
                        <span className="nav_basketCount nav_contentTwo"> {cart?.length} </span>
                    </div>
                </Link>

            </div>

            {/* ----------------- Section END ----------------- */}
        </div>
    )
}

export default Header