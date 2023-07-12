import React from 'react';

const Item = ({ item }) => {
    return (
        <div className='ml-10'>

            <li>{item.name}</li>

        </div>
    );
};

export default Item;