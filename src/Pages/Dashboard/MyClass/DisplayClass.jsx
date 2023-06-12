import React from "react";

const DisplayClass = ({ item,index }) => {
  const { _id, image, name,email, availableSeats, price, instructorName,status } = item;
  return (
    <tr>
      <th className="bg-white text-black">{index}</th>
      <td >
        <img className="w-12 h-12 rounded-lg" src={image} alt="" />
      </td>
      <td className="bg-white text-black">{name}</td>
      <td className="bg-white text-black">{instructorName}</td>
      <td className="bg-white text-black">{email}</td>
      <td className="bg-white text-black">{availableSeats}</td>
      <td className="bg-white text-black">${price}</td>
      <td className="bg-white text-black">
        <div className="btn-group btn-group-vertical lg:btn-group-horizontal">
         {status}
        </div>
      </td>
      <td className="bg-white text-black">
      <button className="btn mt-5  text-white" style={{backgroundColor:"#07332F"}}>
              Feedback
            </button>
      </td>
      <td className="bg-white text-black">
      <button className="btn mt-5  text-white" style={{backgroundColor:"#07332F"}}>
              Update
            </button>
      </td>
    </tr>
  );
};

export default DisplayClass;
