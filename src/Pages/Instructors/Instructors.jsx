import React, { useEffect, useState } from "react";
import Instructor from "./instructor";
import "./Instructors.css"
import Container from "../Shared/Container";
const Instructors = () => {
  const [allInstructors, setAllInstructors] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/instructors")
      .then((res) => res.json())
      .then((data) => setAllInstructors(data));
  }, []);
  return <Container>
    <div>
    <h1 id="instructor" className="text-center text-4xl font-bold mx-auto uppercase mb-10 mt-20">About Instructor</h1>
    <div className="grid grid-cols-3 gap-6">
    {
        allInstructors.map(instructor=><Instructor key={instructor._id} instructor={instructor}></Instructor>)
    }
    </div>
  </div>;
  </Container>
};

export default Instructors;
