import React from 'react'
import './Header.css'
 import SearchIcon from '@mui/icons-material/Search'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'
 import { Link } from 'react-router-dom'
 import MdLocation from '@mui/icons-material/LocationOn'
import { useStateValue } from './Stateprovider'
import {auth} from './Firebase'


function Header() {
 
 const [{basket,loggedInUser},dispatch] = useStateValue();
//  console.log("your basket" ,basket)
 
const logoutUser =()=>{
  if(loggedInUser){
    auth.signOut();
  }
}

  return (
    <div className='header'>
        <img className='header__logo' src='/img/amazon_logo.png' alt='Amazon-logo'/>
        <div className='location'>
          <p className='add-first'>Deliver to</p>
          <div className='add_icon'>
            <MdLocation className='loc_icon'/>
            <p>Pakistan</p>
          </div>
        </div>
        <div className='header__search'>
            <input type='text' placeholder='Seacrh Your Products' className='header__searchInput'/>
            <SearchIcon className='header__searchIcon'/>
        </div>
        < div className='header__nav'>
      <Link to={!loggedInUser && '/login'} className='header__link'>
      <div onClick={logoutUser} className='header__option'>
        <div className='header__optionLineOne'>Hello ,{loggedInUser?.email}</div>
        <div className='header__optionLineTwo'>{loggedInUser ? 'Signout':'Sign In'}</div>
      </div>
      </Link>

      <Link to='/' className='header__link'>
      <div className='header__option'>
        <div className='header__optionLineOne'>Return</div>
        <div className='header__optionLineTwo'>& Order</div>
      </div>
      </Link>

      {/* <Link to='/' className='header__link'>
      <div className='header__option'>
        <div className='header__optionLineOne'>You</div>
        <div className='header__optionLineTwo'>Price</div>
      </div>
      </Link> */}
      </div>
      <Link to='/checkout' className='header__link'>

        <div className='header__optionBasket'>
            <ShoppingBasketIcon/>
            <span className='header__optionLineTwo header__pro]ductCount'>{basket?.length}</span>
        </div>
      </Link>
    </div>
  )
}

export default Header
