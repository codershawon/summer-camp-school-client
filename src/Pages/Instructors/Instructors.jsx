import React, { useEffect, useState } from "react";
import Instructor from "./instructor";
import Container from "../Shared/Container";
import SectionTitle from "../../components/SectionTitle";
const Instructors = () => {
  const [allInstructors, setAllInstructors] = useState([]);
  useEffect(() => {
    fetch("https://summer-camp-school-server-side.vercel.app/instructors")
      .then((res) => res.json())
      .then((data) => setAllInstructors(data));
  }, []);
  return <Container>
    <div>
    <SectionTitle  heading="ABOUT INSTRUCTOR" />
    <div className="grid grid-cols-3 gap-6">
    {
        allInstructors.map(instructor=><Instructor key={instructor._id} instructor={instructor}></Instructor>)
    }
    </div>
  </div>;
  </Container>
};

export default Instructors;
