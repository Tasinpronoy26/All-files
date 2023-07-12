import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import Item from '../Item/Item';

const Navbar = () => {

    const [open, setOpen] = useState(false);

    const items = [
        { id: 1, path: '/images/cat.jpg', name: 'Home' },
        { id: 2, path: '/images/dog.jpg', name: 'About' },
        { id: 3, path: '/images/bird.jpg', name: 'Contact' },
        { id: 4, path: '/images/fish.jpg', name: 'Products' },
        { id: 5, path: '/images/rabbit.jpg', name: 'Services' }
    ]

    return (

        <nav className='bg-slate-500'>

            <div onClick={() => setOpen(!open)} className='md:hidden'>
                <span >
                    {
                        open === true ?
                            <XMarkIcon className="h-6 w-6 text-white-500" />
                            : <Bars3Icon className="h-6 w-6 text-white-500" />
                    }
                </span>
            </div>

            <ul className={`md:flex p-5 sm:bg-slate-500 text-white absolute md:static duration-500 ${open ? 'top-6' : '-top-48'}`}>
                {
                    items.map(item => <Item item={item} key={item.id}></Item>)
                }
            </ul>

        </nav>


    );
};



export default Navbar;