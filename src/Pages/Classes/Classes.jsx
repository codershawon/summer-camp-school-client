import React from "react";
import SectionTitle from "../../components/SectionTitle";
import Class from "./Class";
import useClasses from "../../hooks/useClasses";
const Classes = () => {
  const [classes] = useClasses();
  console.log(classes);
  const approvedClasses = classes.filter((item) => item.status === "Approved");

  return (
    <div className="mb-10">
      <SectionTitle heading="APPROVED CLASS" />
      <div className="bg-gray-100  p-10 rounded-lg w-[1200px] mx-auto">
        <table className="table w-[920px] mx-auto mt-4 text-white">
          {/* head */}
          <thead>
            <tr className="uppercase text-white ">
              <th className="bg-[#07332F]"></th>
              <th className="bg-[#07332F]">IMAGE</th>
              <th className="bg-[#07332F]">NAME</th>
              <th className="bg-[#07332F]">Available Seats</th>
              <th className="bg-[#07332F]">Available Students</th>
              <th className="bg-[#07332F]">Price</th>
              <th className="bg-[#07332F]">Button</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {approvedClasses.map((item, index) => (
              <Class key={item._id} item={item} index={index}></Class>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Classes;
