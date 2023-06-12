import React from 'react';

const SectionTitle = ({heading}) => {
    return (
        <div className='text-center'>
           <hr className='border-2 border-b-gray-400 w-[550px] mx-auto mt-3 mb-3'></hr> 
           <h2 className='uppercase text-4xl'>{heading}</h2>
           <hr className='border-2 border-b-gray-400 w-[550px] mx-auto mt-3 mb-3'></hr> 
        </div>
    );
};

export default SectionTitle;