import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    const itemsOfNavBar = {


    }


    return (
        <div className="navbar bg-black bg-opacity-50 max-w-screen-xl text-white fixed z-10 flex justify-between">
            <div>
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black">
                        <Link to="/"><li>Home</li></Link>
                        <li>Contact Us</li>
                        <li>Dashboard</li>
                        <li>Our Menu</li>
                        <li>Our Shop</li>
                    </ul>
                </div>
                <a className="btn btn-ghost uppercase font-bold">Bistro Boss <span className='font-normal'>restaurants</span></a>
            </div>
            <div className="hidden lg:flex">
                <ul className="menu menu-horizontal  gap-3 font-semibold">

                    <Link to="/"><li>Home</li></Link>
                    <li>Contact Us</li>
                    <li>Dashboard</li>
                    <li>Our Menu</li>
                    <li>Our Shop</li>

                </ul>
            </div>
            <div className='flex gap-3'>
                <p>Sign Out</p>
                <div className="avatar">
                    <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;