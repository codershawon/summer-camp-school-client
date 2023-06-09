import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';

const Class = ({ item, index }) => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const location=useLocation()
  const{_id,image,name,availableSeats,price,numberOfStudents,instructorName}=item
  const [loginPrompt,setLoginPrompt]=useState(false)
    const handleSelectClass = (item) => {
    if(user && user.email){
      const selectedClass={classId:_id,image, name,instructorName,price,numberOfStudents, availableSeats,email:user.email }
      fetch("http://localhost:4000/bookedClass", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(selectedClass),
      }) .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
        //   refetch() ///refetch card to update the number of items in the cart
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "You selected class successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  }else {
  setLoginPrompt(true)
  }
    }
    if (loginPrompt) {
      Swal.fire({
        title: "Please login first to select item",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  return (
    <tr className={availableSeats === 0 ? 'bg-red-500' : ''}>
      <th className="bg-white text-black">{index}</th>
      <td className="w-12 h-12 rounded-lg bg-white">
        <img src={image} alt="" />
      </td>
      <td className="bg-white text-black">{name}</td>
      <td className="bg-white text-black">${availableSeats}</td>
      <td className="bg-white text-black">${price}</td>
      <td className="bg-white text-black">
        <Link>
          <button
            className="btn text-white"
            style={{ backgroundColor: "#07332F" }}
            disabled={availableSeats === 0}
            onClick={() => handleSelectClass(item)}
          >
            Select
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default Class;
