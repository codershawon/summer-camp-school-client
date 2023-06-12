import React, { useEffect, useState } from 'react';
import Container from '../../Shared/Container';
import SectionTitle from '../../../components/SectionTitle';
const PopularInstructors = () => {
    const [instructors,setInstructors]=useState([])
    instructors.sort((a, b) => b.numberOfStudents - a.numberOfStudents)
    const topInstructors = instructors.slice(0, 6)
    console.log(topInstructors)
    useEffect(()=>{
        fetch("https://summer-camp-school-server-side.vercel.app/instructors").then(res=>res.json()).then(data=>setInstructors(data))
    },[])
    return (
        <Container>
        <div className='mt-10 mb-20'>
        <SectionTitle  heading="POPULAR INSTRUCTORS" />
            <div className='grid grid-cols-3'>
            {topInstructors.map((item) => (
          <img className='h-[600px] w-[570px] gap-2 mb-3 rounded-lg' key={item._id} src={item.image} alt="" />
    ))}
            </div>
        </div>
    </Container>
    );
};

export default PopularInstructors;