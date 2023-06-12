import React, { useState } from "react";

const DisplayClass = ({ item, index }) => {
  const {
    _id,
    image,
    name,
    email,
    availableSeats,
    price,
    instructorName,
    status,
  } = item;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFeedback = () => {
    // Open the modal
    setIsModalOpen(true);
  };

  return (
    <tr>
      <th className="bg-white text-black">{index}</th>
      <td>
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
        <button
          onClick={handleFeedback}
          disabled={status !== "Approved"} // Disable the button if status is not 'approved'
          className={`btn ${
            status !== "Approved" ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Feedback
        </button>
      </td>
      <td className="bg-white text-black">
        <button
          className="btn mt-5 text-white"
          style={{ backgroundColor: "#07332F" }}
        >
          Update
        </button>
      </td>
      {isModalOpen && (
        <dialog
          id="my_modal_5"
          className="modal modal-bottom sm:modal-middle"
          open
        >
          <form method="dialog" className="modal-box bg-white">
            <div className="modal-content">
              <label htmlFor="feedback-input" className="block mb-2">
                Feedback:
              </label>
              <textarea
                id="feedback-input"
                className="w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 bg-gray-300 text-black"
                rows="4"
              ></textarea>
            </div>
            <div className="modal-action">
              {/* If there is a button in the form, it will close the modal */}
              <button className="btn" onClick={() => setIsModalOpen(false)}>
                Close
              </button>
            </div>
          </form>
        </dialog>
      )}
    </tr>
  );
};

export default DisplayClass;

