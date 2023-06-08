import React, { useEffect, useState } from 'react';
import Container from '../../Shared/Container';
import "./PopularClasses.css"
// import Classes from './Classes';
const PopularClasses = () => {
    const [classes,setClasses]=useState([])
    classes.sort((a, b) => b.numberOfStudents - a.numberOfStudents)
    const topClasses = classes.slice(0, 6)
    console.log(topClasses)
    useEffect(()=>{
        fetch("classes.json").then(res=>res.json()).then(data=>setClasses(data))
    },[])
    return (
        <Container>
            <div className='mt-10 mb-20'>
                <h1 id='class' className='text-center text-4xl font-bold mx-auto uppercase mb-10'>Popular Classes</h1>
                <div className='grid grid-cols-3'>
                {topClasses.map((item) => (
              <img className='h-[600px] w-[570px] gap-2 mb-3 rounded-lg' key={item.id} src={item.image} alt="" />
        ))}
                </div>
            </div>
        </Container>
    );
};

export default PopularClasses;