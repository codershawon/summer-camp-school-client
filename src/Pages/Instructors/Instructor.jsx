import React from 'react';

const Instructor = ({instructor}) => {
    const{image,instructorName,email}=instructor
    return (
        <div className="card w-[550px] h-[500px] bg-gray-300 shadow-xl">
        <figure className="px-10 pt-10 h-[500px] w-[500px]">
          <img src={image}  className="rounded-xl" />
        </figure>
        <div className="card-body items-left text-left">
          <h2 className="card-title"><span className='text-gray-500 font-bold uppercase'>Instructor Name:</span> {instructorName}</h2>
          <h2><span className='text-gray-500 font-bold uppercase'>Instructor Email:</span> {email}</h2>
        </div>
      </div>
    );
};

export default Instructor;