import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from 'react-query';
import DisplayClass from './DisplayClass';
import useInstructor from '../../../hooks/useInstructor';
import SectionTitle from '../../../components/SectionTitle';

const MyClass = () => {
    const[instructorData]=useInstructor()
    console.log(instructorData)

    return (
      <div className="mb-10">
        <SectionTitle heading="MY CLASS" />
          <h1>Total Enrolled Students: 0</h1>
          <table className="table w-[920px] mx-auto mt-4 text-white rounded-lg">
            {/* head */}
            <thead>
              <tr className="uppercase text-white ">
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
            {/* {instructorClasses.map((item,index) => (
              <DisplayClass key={item._id} item={item} index={index}></DisplayClass>
            ))} */}
            </tbody>
          </table>
        </div>
    );
};

export default MyClass;