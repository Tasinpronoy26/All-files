import React from 'react';

const Coffee = ({ coffee }) => {

    const {_id, name, quantity, supplier, taste, category, details, photo } = coffee;

    const handleDelete = (_id) => {

        console.log(_id);
    }



    return (
        <div className='ms-10 '>
            <div className="card card-side bg-base-100 shadow-xl mt-10 w-full grid grid-cols-3 p-10 justify-items-end">
                <figure><img className='w-32' src={photo} alt="Movie" /></figure>
                <div>
                    <p>{name}</p>
                    <p>{taste}</p>
                    <p>{quantity}</p>
                </div>
                <div className="btn-group btn-group-vertical">
                    <button className="btn  mb-5 w-16">Update</button>
                    <button onClick={() => handleDelete(_id)} className="btn mb-5 w-16">x</button>
                    <button className="btn mb-5 w-16">view</button>
                
                </div>
            </div>
        </div>
    );
};

export default Coffee;