import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle";
import Swal from "sweetalert2";
import useClasses from "../../../hooks/useClasses";

const ManageClasses = () => {
  const [classes] = useClasses();
  console.log(classes);
  const [updatedClasses, setUpdatedClasses] = useState([]);
  

  useEffect(() => {
    setUpdatedClasses(classes);
  }, [classes]);
  console.log(updatedClasses);
  const handleStatusChange = (_id, status) => {
    console.log(_id, status);
    const newStatus = { status };
    console.log(newStatus);
    
    // Update the status in the database
    fetch(`https://summer-camp-school-server-side.vercel.app/classes/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newStatus)
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Failed to update class status.");
        }
      })
      .then((data) => {
        console.log(data);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500
        });
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Failed to update class status.",
        });
      });
  };
  
  return (
    <div>
     <SectionTitle  heading="MANAGE CLASS" />
      <div className="bg-gray-100  p-10 rounded-lg">
        <div className="overflow-x-auto">
          <table className="table w-[920px] mx-auto mt-4 text-white">
            {/* head */}
            <thead>
              <tr className="text-white uppercase">
                <th className="bg-[#07332F]"></th>
                <th className="bg-[#07332F]">Class Image</th>
                <th className="bg-[#07332F]">Class Name</th>
                <th className="bg-[#07332F]">Instructor Name</th>
                <th className="bg-[#07332F]">Instructor Email</th>
                <th className="bg-[#07332F]">Available Seats</th>
                <th className="bg-[#07332F]">Price</th>
                <th className="bg-[#07332F]">Status</th>
                <th className="bg-[#07332F]">Button</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {updatedClasses.map((item, index) => (
                <tr key={item._id}>
                  <th className="bg-gray text-black">{index + 1}</th>
                  <td>
                    <img
                      className="w-20 h-20 rounded-lg bg-gray"
                      src={item.image}
                      alt=""
                    />
                  </td>
                  <td className="bg-gray text-black">{item.name}</td>
                  <td className="bg-gray text-black">{item.instructorName}</td>
                  <td className="bg-gray text-black">{item.email}</td>
                  <td className="bg-gray text-black">{item.availableSeats}</td>
                  <td className="bg-gray text-black">{item.price}</td>
                  <td className="bg-gray text-black">{item.status}</td>
                  <td className="bg-gray text-black">
                    <div className="btn-group btn-group-vertical">
                      <button
                        className="btn"
                        disabled={item.status==="Approved" || item.status === "Denied"}
                        onClick={() => handleStatusChange(item._id, "Approved")}
                      >
                        Approved
                      </button>
                      <button
                        className="btn"
                        disabled={item.status==="Approved"|| item.status === "Denied"}
                        onClick={() => handleStatusChange(item._id, "Denied")}
                      >
                        Denied
                      </button>
                      <button className="btn">Feedback</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageClasses;
