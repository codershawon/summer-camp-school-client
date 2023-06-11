import React from "react";
import useEnrolledClasses from "../../../hooks/useEnrolledClasses";
import useAuth from "../../../hooks/useAuth";
import { MdOutlineDeleteOutline } from "react-icons/md";
import Swal from "sweetalert2";

const PaymentHistory = () => {
  const { user } = useAuth();
  const [enrolledClasses, refetch] = useEnrolledClasses();
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
        fetch(`http://localhost:4000/payments/${item._id}`, {
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
  const sortedClasses = enrolledClasses.sort((a, b) =>
  new Date(b.enrollmentTime) - new Date(a.enrollmentTime)
);
  
  return (
    <div>
      <h1
        id="classes"
        className="text-center text-4xl font-bold mx-auto uppercase mb-10 mt-20"
      >
        Enrolled Classes
      </h1>
      <table className="table w-[920px] mx-auto mt-4 text-white">
        {/* head */}
        <thead>
          <tr className="text-white uppercase">
            <th className="bg-[#07332F]"></th>
            <th className="bg-[#07332F]">Student Name</th>
            <th className="bg-[#07332F]">Student Email</th>
            <th className="bg-[#07332F]">Transaction ID</th>
            <th className="bg-[#07332F]">Enrollment Date</th>
            <th className="bg-[#07332F]">Enrollment Time</th>
            <th className="bg-[#07332F]">PRICE</th>
            <th className="bg-[#07332F]">Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {sortedClasses.map((item, index) => (
            <tr key={item._id}>
              <th className="bg-gray text-black">{index + 1}</th>
              <td className="w-20 h-20 rounded-lg bg-gray text-black">
                {user.displayName}
              </td>
              <td className="bg-gray text-black">{user.email}</td>
              <td className="bg-gray text-black">{item.transactionId}</td>
              <td className="bg-gray text-black">{item.enrollmentDate}</td>
              <td className="bg-gray text-black">{item.enrollmentTime}</td>
              <td className="bg-gray text-black">{item.price}</td>
              <td className="bg-gray text-black">
                <span onClick={() => handleDelete(item)}>
                  <MdOutlineDeleteOutline className="bg-[#07332F] w-8 h-8 p-1 rounded-sm text-white" />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentHistory;
