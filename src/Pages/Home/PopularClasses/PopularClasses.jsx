import React, { useEffect, useState } from 'react';
import Container from '../../Shared/Container';
import SectionTitle from '../../../components/SectionTitle';
const PopularClasses = () => {
    const [classes,setClasses]=useState([])
    classes.sort((a, b) => b.numberOfStudents - a.numberOfStudents)
    const topClasses = classes.slice(0, 6)
    console.log(topClasses)
    useEffect(()=>{
        fetch("https://summer-camp-school-server-side.vercel.app/classes").then(res=>res.json()).then(data=>setClasses(data))
    },[])
    return (
        <Container>
            <div className='mt-20 mb-20'>
            <SectionTitle heading="POPULAR CLASSES" />
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-6'>
                {topClasses.map((item) => (
              <img className='h-full md:h-[500px] w-full md:w-[500px]  mx-auto gap-2 mb-3 rounded-lg mt-4' key={item._id} src={item.image} alt="" />
        ))}
                </div>
            </div>
        </Container>
    );
};

export default PopularClasses;