import React, { useEffect, useState } from 'react';
import DisplayClass from './DisplayClass';
import SectionTitle from '../../../components/SectionTitle';
import useSelectedInstructor from '../../../hooks/useSelectedInstructor';

const MyClass = () => {
  const [instructor] = useSelectedInstructor();
  console.log(instructor)
  // const [totalEnrolledStudents, setTotalEnrolledStudents] = useState(0);


  return (
    <div className="mb-10">
      <SectionTitle heading="MY CLASS" />
      <h1 className='text-xl font-bold'>Total Enrolled Students: {}</h1>
      <div className="bg-gray-100  p-10 rounded-lg">
        <table className="table w-[920px] mx-auto mt-4 text-white rounded-lg">
          {/* head */}
          <thead>
            <tr className="uppercase text-white">
              <th className="bg-[#07332F]"></th>
              <th className="bg-[#07332F]">IMAGE</th>
              <th className="bg-[#07332F]">Course Name</th>
              <th className="bg-[#07332F]">Instructor Name</th>
              <th className="bg-[#07332F]">Instructor Email</th>
              <th className="bg-[#07332F]">Available Seats</th>
              <th className="bg-[#07332F]">Price</th>
              <th className="bg-[#07332F]">Status</th>
              <th className="bg-[#07332F]">Feedback</th>
              <th className="bg-[#07332F]">Update</th>
            </tr>
          </thead>
          <tbody>
            {instructor.map((item, index) => (
              <DisplayClass key={item._id} item={item} index={index} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClass;
