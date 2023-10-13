import React from 'react';

const Instructor = ({instructor}) => {
    const{image,instructorName,email}=instructor
    return (
        <div className="card w-[450px] h-[450px] bg-gray-300 shadow-xl">
        <figure>
          <img src={image}  className="rounded-lg h-60 w-full" />
        </figure>
        <div className="card-body items-left text-left absolute top-72">
          <h2 className="card-title"><span className='text-gray-500 font-bold uppercase text-lg'>Instructor Name:</span> {instructorName}</h2>
          <h2><span className='text-gray-500 font-bold uppercase'>Instructor Email:</span> {email}</h2>
        </div>
      </div>
    );
};

export default Instructor;