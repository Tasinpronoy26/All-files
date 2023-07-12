import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';



const Price = () => {


    const [prices, setPrices] = useState([]);


    useEffect(() => {
        fetch('price.json')
            .then(res => res.json())
            .then(data => setPrices(data.pricing_lists))
    }, [])


    return (    
        <div>

            <h1 className='mx-10 rounded-md bg-slate-600 p-8 text-center  text  -red-100 font-bold  mt-10 text-5xl'>Pricing List</h1>

            <div className='md:grid grid-cols-3  mt-10 text-red-50 p-10 '>

                {
                    prices.map(price => <Card price={price} key={price.id}></Card>)
                }
                
            </div>


        </div>


    );
};

export default Price;