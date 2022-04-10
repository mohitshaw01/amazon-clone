import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom';

import{useStateValue} from "./StateProvider";

function Header() {

    const [{basket,user}]= useStateValue();
    console.log(basket);
  return (
    <nav className='header'>
    <Link to="/">
   <img
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            className="header__logo"
            alt="Logo" />
    </Link>

    <div className="header__search">
                <input className="header__searchInput" type="text" />  
                  
    </div>
    <div className='header__nav'>

    <Link to='/login' className='header__link'>
        <div className='header__option'>
            <span className='header__optionlineone'> Hello </span>
            <span className='header__optionlinetwo'> Sign in </span>
        </div>
        </Link>


        <Link to='/' className='header__link'>
        <div className='header__option'>
            <span className='header__optionlineone'> Return  </span>
            <span className='header__optionlinetwo'> & Order </span>
        </div>
        </Link>

        <Link to='/' className='header__link'>
        <div className='header__option'>
            <span className='header__optionlineone'> Your </span>
            <span className='header__optionlinetwo'> Prime </span>
        </div>
        </Link>

        <Link to='/Checkout' className='header__link'>
        <div className='header__optionbasket'>
            <p className='para'>cart</p>
            <span className='header__optionlinetwo header__basketcount'>{basket  ?.length}</span>
        </div>
        </Link>
        
        
    </div>


    </nav>
  )
}

export default Header