import React from 'react';
import useEnrolledClasses from '../../hooks/useEnrolledClasses';


const EnrolledClasses = () => {
  const enrolledClasses=useEnrolledClasses()
  console.log(enrolledClasses)
  
    return (
        <div>
            <h1>Enrolled Classes</h1>
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
                {enrolledClasses.map((item, index) => (
                  <tr key={item._id}>
                    <th className="bg-gray text-black">{index + 1}</th>
                    <td className="w-20 h-20 rounded-lg bg-gray">
                      {/* <img src={} alt="" /> */}
                    </td>
                    <td className="bg-gray text-black">{item.email}</td>
                    <td className="bg-gray text-black">
                      {}
                    </td>
                    <td className="bg-gray text-black">
                      {}
                    </td>
                    <td className="bg-gray text-black">
                      {item.numberOfStudents}
                    </td>
                    <td className="bg-gray text-black">${item.price}</td>
                    <td className="bg-gray text-black">
                      {/* <span onClick={() => handleDelete(item)}>
                        <MdOutlineDeleteOutline className="bg-[#07332F] w-8 h-8 p-1 rounded-sm text-white" />
                      </span> */}
                    </td>
                    <td className="bg-gray text-black">
                      {/* <Link to="/dashboard/payments">
                        <button
                          className="btn text-white"
                          style={{ backgroundColor: "#07332F" }}
                        >
                          Pay
                        </button>
                      </Link> */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
        </div>
    );
};

export default EnrolledClasses;