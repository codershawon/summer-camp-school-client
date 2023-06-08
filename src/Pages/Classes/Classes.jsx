import React, { useEffect, useState } from "react";
import "./Classes.css";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
const Classes = () => {
  const [classes, setClasses] = useState([]);
  const { user } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:4000/classes")
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);
  const handleSelectClass = (_id,availableSeats) => {
    if (user && availableSeats > 0) {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'You selected this class successfully',
        showConfirmButton: false,
        timer: 1500
      })
    } else if (!user) {
      navigate("/login");
    }
  };
  return (
    <div className="mb-10">
      <h1
        id="classes"
        className="text-center text-4xl font-bold mx-auto uppercase mb-10 mt-20"
      >
        Approved Classes
      </h1>

      <div className="overflow-x-auto">
        <table className="table w-[920px] mx-auto mt-4 text-white">
          {/* head */}
          <thead>
            <tr className="uppercase text-white ">
              <th className="bg-[#07332F]"></th>
              <th className="bg-[#07332F]">IMAGE</th>
              <th className="bg-[#07332F]">NAME</th>
              <th className="bg-[#07332F]">Available seats</th>
              <th className="bg-[#07332F]">Price</th>
              <th className="bg-[#07332F]">Button</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {classes.map((row, index) => (
              <tr key={row._id} >
                <th className="bg-white text-black">{index + 1}</th>
                <td className="w-12 h-12 rounded-lg bg-white">
                  <img src={row.image} alt="" />
                </td>
                <td className="bg-white text-black">{row.name}</td>
                <td className="bg-white text-black">${row.availableSeats}</td>
                <td className="bg-white text-black">${row.price}</td>
                <td className="bg-white text-black">
                    <Link>
                      {" "}
                      <button
                        className="btn text-white"
                        style={{ backgroundColor: "#07332F" }}
                        disabled={ row.availableSeats === 0}
                        onClick={()=>handleSelectClass(row._id,row.availableSeats)}
                      >
                        Select
                      </button>
                    </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Classes;
