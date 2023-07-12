import React from 'react';

const BannerTitle = ({ title, heading }) => {
    return (
        <div className='text-center grid items-center justify-center mt-20'>
          
                <p className=' italic text-yellow-700'>----{title}----</p>
                <h1 className='md:text-3xl border-b-4 border-t-4 w-72 my-8 p-4'>{heading}</h1>
        
        </div>
    );
};

export default BannerTitle;