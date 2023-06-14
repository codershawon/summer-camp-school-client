import React from "react";
import useClass from "../../../hooks/useClass";
import Container from "../../Shared/Container";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { MdOutlineDeleteOutline } from "react-icons/md";
import Swal from "sweetalert2";
import SectionTitle from "../../../components/SectionTitle";
const SelectedClass = () => {
  const [bookedClass, refetch] = useClass();
  const total = bookedClass.reduce((sum, item) => item.price + sum, 0);
  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:4000/bookedClass/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <Container>
      <div>
        <Helmet>
          <title>Summer Camp School || Selected Classes</title>
        </Helmet>
        <SectionTitle  heading="SELECTED CLASSES" />
        <div className="bg-gray-100 w-[990px] p-10 rounded-lg">
          <div className="flex justify-between">
            <h2 className="text-2xl font-bold uppercase">
              Total Selected Classes: {bookedClass.length}
            </h2>
            <h2 className="text-2xl font-bold uppercase">
              Total Class fee: ${total}
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="table w-[920px] mx-auto mt-4 text-white">
              {/* head */}
              <thead>
                <tr className="text-white uppercase">
                  <th className="bg-[#07332F]"></th>
                  <th className="bg-[#07332F]">IMAGE</th>
                  <th className="bg-[#07332F]">NAME</th>
                  <th className="bg-[#07332F]">Instructor Name</th>
                  <th className="bg-[#07332F]">Available seats</th>
                  <th className="bg-[#07332F]">Number of students</th>
                  <th className="bg-[#07332F]">PRICE</th>
                  <th className="bg-[#07332F]">ACTION</th>
                  <th className="bg-[#07332F]">Payment</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {bookedClass.map((item, index) => (
                  <tr key={item._id}>
                    <th className="bg-gray text-black">{index + 1}</th>
                    <td>
                      <img className="w-20 h-20 rounded-lg bg-gray" src={item.image} alt="" />
                    </td>
                    <td className="bg-gray text-black">{item.name}</td>
                    <td className="bg-gray text-black">
                      {item.instructorName}
                    </td>
                    <td className="bg-gray text-black">
                      {item.availableSeats}
                    </td>
                    <td className="bg-gray text-black">
                      {item.numberOfStudents}
                    </td>
                    <td className="bg-gray text-black">${item.price}</td>
                    <td className="bg-gray text-black">
                      <span onClick={() => handleDelete(item)}>
                        <MdOutlineDeleteOutline className="bg-[#07332F] w-8 h-8 p-1 rounded-sm text-white" />
                      </span>
                    </td>
                    <td className="bg-gray text-black">
                      <Link to="/dashboard/payments">
                        <button
                          className="btn text-white"
                          style={{ backgroundColor: "#07332F" }}
                        >
                          Pay
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SelectedClass;
