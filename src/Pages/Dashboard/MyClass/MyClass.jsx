import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from 'react-query';
import DisplayClass from './DisplayClass';

const MyClass = () => {
    const[axiosSecure]=useAxiosSecure("https://summer-camp-school-server-side.vercel.app")
    const {data:classes=[],refetch}=useQuery(["classes"],async()=>{
        const res= await axiosSecure.get(`/classes`)
        return res.data
    })
    console.log(classes)

    return (
      <div className="mb-10">
        <h1
          id="classes"
          className="text-center text-4xl font-bold mx-auto uppercase mb-10 mt-20"
        >
          My Classes
        </h1>
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
            {classes.map((item,index) => (
              <DisplayClass key={item._id} item={item} index={index}></DisplayClass>
            ))}
            </tbody>
          </table>
        </div>
    );
};

export default MyClass;