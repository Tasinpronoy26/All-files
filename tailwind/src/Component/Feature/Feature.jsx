import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const Feature = ({ feature }) => {
    return (
        <div className='flex'>


            <CheckCircleIcon className="h-6 w-6 text-blue-100" />

            <div className='ml-2'>
                {feature}
            </div>

        </div>
    );
};

export default Feature;