import React, { useEffect, useState } from 'react';
import Container from '../../Shared/Container';
import "./PopularInstructors.css"
const PopularInstructors = () => {
    const [instructors,setInstructors]=useState([])
    instructors.sort((a, b) => b.numberOfStudents - a.numberOfStudents)
    const topInstructors = instructors.slice(0, 6)
    console.log(topInstructors)
    useEffect(()=>{
        fetch("http://localhost:4000/instructors").then(res=>res.json()).then(data=>setInstructors(data))
    },[])
    return (
        <Container>
        <div className='mt-10 mb-20'>
            <h1 id='class' className='text-center text-4xl font-bold mx-auto uppercase mb-10 mt-20'>Popular Instructors</h1>
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