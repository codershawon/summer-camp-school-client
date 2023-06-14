import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle";
import Swal from "sweetalert2";
import useClasses from "../../../hooks/useClasses";

const ManageClasses = () => {
  const [classes] = useClasses();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);
  const [updatedClasses, setUpdatedClasses] = useState([]);

  useEffect(() => {
    setUpdatedClasses(
      classes.map((item) => ({ ...item, feedbackProvided: false }))
    );
  }, [classes]);

  const handleFeedback = (classItem) => {
    setSelectedClass(classItem);
    setIsModalOpen(true);
  };

  const handleStatusChange = (_id, status) => {
    const newStatus = { status };

    // Update the status in the database
    fetch(`http://localhost:4000/classes/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newStatus),
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
        // Update the status in the client-side
        setUpdatedClasses((prevClasses) =>
          prevClasses.map((item) =>
            item._id === _id ? { ...item, status } : item
          )
        );

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
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

  const handleFeedbackSend = (classItem, feedback) => {
    const newStatus = {
      status: classItem.status,
      feedback,
    };

    // Update the feedback in the database
    fetch(`http://localhost:4000/classes/${classItem._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newStatus),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Failed to update feedback.");
        }
      })
      .then((data) => {
        console.log(data);
        // Update the feedback and set feedbackProvided to true
        setUpdatedClasses((prevClasses) =>
          prevClasses.map((item) =>
            item._id === classItem._id
              ? { ...item, feedbackProvided: true }
              : item
          )
        );

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your feedback has been sent",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Failed to update feedback.",
        });
      });
  };

  return (
    <div>
      <SectionTitle heading="MANAGE CLASS" />
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
                      {item.status !== "Approved" && item.status !== "Denied" && (
                        <button
                          className="btn"
                          onClick={() => handleStatusChange(item._id, "Approved")}
                        >
                          Approved
                        </button>
                      )}
                      {item.status !== "Approved" && item.status !== "Denied" && (
                        <button
                          className="btn"
                          onClick={() => handleStatusChange(item._id, "Denied")}
                        >
                          Denied
                        </button>
                      )}
                      {!item.feedbackProvided && (
                        <button
                          className="btn"
                          onClick={() => handleFeedback(item)}
                        >
                          Feedback
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {isModalOpen && selectedClass && (
        <dialog
          id="my_modal_5"
          className="modal modal-bottom sm:modal-middle bg-transparent"
          open
        >
          <form
            method="dialog"
            className="modal-box bg-white"
            onSubmit={(e) => {
              e.preventDefault();
              const feedbackInput = e.target.elements["feedback-input"];
              const feedback = feedbackInput.value;
              handleFeedbackSend(selectedClass, feedback);
              setIsModalOpen(false);
            }}
          >
            <div className="modal-content">
              <label htmlFor="feedback-input" className="block mb-2">
                Feedback:
              </label>
              <textarea
                id="feedback-input"
                className="w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 bg-gray-300 text-black"
                rows={4}
                required
              ></textarea>
            </div>
            <div className="modal-actions flex gap-3">
              <button type="submit" className="btn">
                Submit
              </button>
              <button
                type="button"
                className="btn"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </dialog>
      )}
    </div>
  );
};

export default ManageClasses;


