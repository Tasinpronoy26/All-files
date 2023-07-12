import React from 'react';
import Feature from '../Feature/Feature';

const Card = ({ price }) => {
    return (
        <div className='bg-slate-500 mr-4 p-5 rounded-md    '>

            <h1 className='font-bold text-5xl mb-2 text-center text-red-400'>{price.price} <span className='text-2xl text-white'>/mon</span></h1>
            <h1 className='text-4xl font-semibold mt-10 text-center'>{price.name}</h1>

            <div className='mt-5'>
                <p className='mb-5 text-red-400'>Features:</p>
                {
                    price.features.map((feature, idx) => <Feature feature={feature} key={idx}></Feature>)
                }
            </div>
            <button className='bg-red-400 mt-4 rounded-md hover:bg-black w-full h-10'>Buy Now</button>

        </div>
    );
};

export default Card;