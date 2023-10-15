import React from 'react';

const Instructor = ({instructor}) => {
    const{instructorImage,instructorName,email}=instructor
    return (
        <div className="card w-full md:max-w-md lg:max-w-lg  h-[450px] bg-gray-300 shadow-xl">
        <figure>
          <img src={instructorImage}  className="rounded-lg h-60 w-full" />
        </figure>
        <div className="card-body items-left text-left absolute top-72 w-full">
          <h2 className="card-title text-lg md:text-sm"><span className='text-gray-500 font-bold text-lg  md:text-sm lg:text-sm xl:text-lg'>Instructor Name:</span> {instructorName}</h2>
          <h2><span className='text-gray-500 font-bold text-lg  md:text-sm lg:text-sm xl:text-lg'>Instructor Email:</span> {email}</h2>
        </div>
      </div>
    );
};

export default Instructor;