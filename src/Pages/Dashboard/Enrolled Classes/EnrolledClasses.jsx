import React from 'react';
import useEnrolledClasses from '../../../hooks/useEnrolledClasses';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import Swal from 'sweetalert2';
import SectionTitle from '../../../components/SectionTitle';


const EnrolledClasses = () => {
  const [enrolledClasses,refetch]=useEnrolledClasses()
  console.log(enrolledClasses)
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
        fetch(`https://summer-camp-school-server-side.vercel.app/payments/${item._id}`, {
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
        <div>
             <SectionTitle  heading="ENROLLED CLASS" />
           <div className="bg-gray-100  p-10 rounded-lg">
           <table className="table w-[920px] mx-auto mt-4 text-white">
              {/* head */}
              <thead>
                <tr className="text-white uppercase">
                  <th className="bg-[#07332F]"></th>
                  <th className="bg-[#07332F]">IMAGE</th>
                  <th className="bg-[#07332F]">NAME</th>
                  <th className="bg-[#07332F]">Instructor Name</th>
                  <th className="bg-[#07332F]">Number of students</th>
                  <th className="bg-[#07332F]">PRICE</th>
                  <th className="bg-[#07332F]">Action</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {enrolledClasses.map((item, index) => (
                  <tr key={item._id}>
                    <th className="bg-gray text-black">{index + 1}</th>
                    <td>
                      <img className="w-20 h-20 rounded-lg bg-gray" src={item.image} alt="" />
                    </td>
                    <td className="bg-gray text-black">{item.className}</td>
                    <td className="bg-gray text-black">
                      {item.instructorName}
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
                  </tr>
                ))}
              </tbody>
            </table>
           </div>
        </div>
    );
};

export default EnrolledClasses;