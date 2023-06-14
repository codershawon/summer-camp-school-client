import React, { useEffect, useState } from "react";
import DisplayClass from "./DisplayClass";
import SectionTitle from "../../../components/SectionTitle";
import useSelectedInstructor from "../../../hooks/useSelectedInstructor";

const MyClass = () => {
  const [instructor] = useSelectedInstructor();
  console.log(instructor);
  // const [totalEnrolledStudents, setTotalEnrolledStudents] = useState(0);

  return (
    <div className="mb-10">
      <SectionTitle heading="MY CLASS" />
      <h1 className="text-xl font-bold">
        Total Enrolled Students: {instructor.length}
      </h1>
      <div className="grid grid-cols-1 gap-6 mt-6">
        {instructor.map((item) => (
          <DisplayClass key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MyClass;
