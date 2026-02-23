import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'; 

const Navbar = () => {

  const [visible, setVisible] = useState(false)
  const { setShowSearch, setSelectedCategory, getCartCount } = useContext(ShopContext);

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName)
  }

  return (

    <div className='flex items-center justify-between py-5 font-medium'>

      <Link to='/'><img src={assets.logo} className='w-36' alt="" /></Link>

      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>

        {/* <NavLink to='/' className='flex flex-col items-center gap-1'>
          <p>Home</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink> */}
        <NavLink to='/collection' onClick={() => handleCategoryClick('Men')} className='flex flex-col items-center gap-1'>
          <p>Men</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/collection' onClick={() => handleCategoryClick('Women')} className='flex flex-col items-center gap-1'>
          <p>Women</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/collection' onClick={() => handleCategoryClick('Kids')} className='flex flex-col items-center gap-1'>
          <p>Kids</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>

      </ul>
      <div className='flex items-center gap-6'>
        <img onClick={() => setShowSearch(true)} src={assets.search_icon} className='w-5 cursor-pointer' alt="" />
        <div className='group relative'>
          <Link to='/login'><img src={assets.profile_icon} className='w-5 cursor-pointer' alt="" /></Link>
          <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4' >
            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
              <p className='cursor-pointer hover:text-black'>My Profile</p>
              <p className='cursor-pointer hover:text-black'>Orders</p>
              <p className='cursor-pointer hover:text-black'>Logout</p>
            </div>
          </div>
        </div>
        <Link to='/cart' className='relative'>
          <img src={assets.cart_icon} className='w-5 min-w-5' alt="" />
          <p className='absolute -right-1.25 -bottom-1.25 w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
        </Link>
        <img onClick={() => setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" />
      </div>

      {/* Sidebar menu for small screens */}

      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
        <div className='flex flex-col text-gray-600'>
          <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer w-12 rounded-full m-2'>
            <img src={assets.cross_icon} className='h-8 rotate-180' alt="" />
          </div>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border hover:bg-black hover:text-white' to='/'>Home</NavLink>
          <NavLink onClick={() => { setVisible(false); handleCategoryClick('Men'); }} className='py-2 pl-6 border hover:bg-black hover:text-white' to='/collection'>Men</NavLink>
          <NavLink onClick={() => { setVisible(false); handleCategoryClick('Women'); }} className='py-2 pl-6 border hover:bg-black hover:text-white' to='/collection'>Women</NavLink>
          <NavLink onClick={() => { setVisible(false); handleCategoryClick('Kids'); }} className='py-2 pl-6 border hover:bg-black hover:text-white' to='/collection'>Kids</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar
