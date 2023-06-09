import React from "react";
import "./Classes.css";
import useClasses from "../../hooks/useClasses";
import Class from "./Class";
const Classes = () => {
  const [classes] = useClasses();
  return (
    <div className="mb-10">
      <h1
        id="classes"
        className="text-center text-4xl font-bold mx-auto uppercase mb-10 mt-20"
      >
        Approved Classes
      </h1>

        <table className="table w-[920px] mx-auto mt-4 text-white">
          {/* head */}
          <thead>
            <tr className="uppercase text-white ">
              <th className="bg-[#07332F]"></th>
              <th className="bg-[#07332F]">IMAGE</th>
              <th className="bg-[#07332F]">NAME</th>
              <th className="bg-[#07332F]">Available seats</th>
              <th className="bg-[#07332F]">Price</th>
              <th className="bg-[#07332F]">Button</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {classes.map((item,index) => (
              <Class key={item._id} item={item} index={index}></Class>
            ))}
          </tbody>
        </table>
      </div>
  );
};

export default Classes;
