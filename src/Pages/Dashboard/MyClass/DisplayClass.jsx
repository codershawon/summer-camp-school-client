import React, { useState } from "react";
import { Link } from "react-router-dom";

const DisplayClass = ({ item}) => {
  const {
    _id,
    image,
    name,
    email,
    availableSeats,
    price,
    instructorName,
    status,
    feedback,
  } = item;

  return (
    <div className="card card-side bg-gray-300 shadow-xl h-full md:h-[400px] w-full sm:w-[500px] md:w-[1000px] mx-auto flex flex-col md:flex-row items-center">
      <figure className="px-10 pt-10 ">
        {" "}
        <img src={image} className=" h-[350px] w-full md:w-[350px] rounded-lg mb-10" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          <h2 className="card-title">
            <span className="text-gray-500 font-bold uppercase">
              Instructor Name:
            </span>{" "}
            {instructorName}
          </h2>
        </h2>
        <h2 className="card-title">
          <span className="text-gray-500 font-bold uppercase">Name:</span>{" "}
          {name}
        </h2>
        <h2>
          <span className="text-gray-500 font-bold uppercase">
            Instructor Email:
          </span>{" "}
          {email}
        </h2>
        <h2>
          <span className="text-gray-500 font-bold uppercase">
            Available Seats:
          </span>{" "}
          {availableSeats}
        </h2>
        <h2>
          <span className="text-gray-500 font-bold uppercase">Price:</span>{" "}
          {price}
        </h2>
        <h2>
          <span className="text-gray-500 font-bold uppercase">Status:</span>{" "}
          {status}
        </h2>
        <h2>
          <span className="text-gray-500 font-bold uppercase">Feedback:</span>{" "}
          {feedback}
        </h2>
        <div className="card-actions justify-start md:justify-end">
          <div className=" text-black">
            <Link to={`/dashboard/updateClass/${_id}`}>
              <button
                className="btn mt-5 text-white"
                style={{ backgroundColor: "#07332F" }}
              >
                Update
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayClass;

{
  /* <div className="card w-[550px] h-[500px] bg-gray-300 shadow-xl">
<figure className="px-10 pt-10 ">
  <img src={image}  className=" h-auto w-auto rounded-lg" />
</figure>
<div className="card-body items-left text-left">
  <h2 className="card-title"><span className='text-gray-500 font-bold uppercase'>Instructor Name:</span> {instructorName}</h2>
 
  <div className=" text-black">
<Link to={`/dashboard/updateClass/${_id}`}><button
className="btn mt-5 text-white"
style={{ backgroundColor: "#07332F" }}
>
Update
</button></Link>
</div>

// </div>
// </div> */
}
