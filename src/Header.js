import React from 'react'
import "./Header.css"
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import { Link } from "react-router-dom";
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

export default function Header() {
    const [{basket,user}, dispatch ] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }
    return (
        <div className='header'>
            <Link to="/">
                <img className="header_logo"
                 src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            />
            </Link>
            <div 
                className="header_search">
                <input
                className="header_searchInput" type="text" />
                <SearchIcon
                className="header_searchIcon"/>
                
            </div>

            <div className="header_nav">
                <Link to={!user && '/login'}>
                <div onClick = {handleAuthentication} className=  "header_option">
                    <span className="header_optionLineOn">Hello, {user?.email}</span>
                    <span className="header_optionLineTw">{user ? 'Sign Out': 'Sign In'}</span>
                </div>
                </Link>
                <div className="header_option">
                    <span className="header_optionLineOn">Return</span>
                    <span className="header_optionLineTw">Orders</span>
                </div>
                <div className="header_option">
                    <span className="header_optionLineOn">Your</span>
                    <span className="header_optionLineTw">Prime</span>    
                </div>
                <Link to="/checkout">
                <div className="header_optionBasket">
                    <ShoppingBasketIcon />
                    <span className="header_optionLineTw header_basketCount">{basket.length}</span>
                </div>
                </Link>
            </div>
        </div>
    )
}
