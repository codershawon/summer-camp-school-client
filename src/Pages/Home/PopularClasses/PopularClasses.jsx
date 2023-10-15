import React, { useEffect, useState } from 'react';
import Container from '../../Shared/Container';
import SectionTitle from '../../../components/SectionTitle';
import { MdEventAvailable } from 'react-icons/md';
import { FaDollarSign } from 'react-icons/fa';
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
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-2 lg:gap-3'>
                {topClasses.map((item) => (
                    <div key={item._id} className='relative w-full md:max-w-md overflow-hidden rounded-2xl shadow-lg group' >
                        <img className='transition-transform group-hover:scale-110 duration-200 h-full w-full' key={item._id} src={item.image} alt="" />
                        <div className='absolute inset-0 flex items-end bg-gradient-to-t from-black/95 to-transparent'>
                            <div className='p-4 text-white'>
<p className='text-gray-200 text-2xl font-bold'>Class | <span className='text-lg font-semibold'>{item.name}</span></p>
<p className='text-gray-200 text-2xl font-bold'>Instructor | <span className='text-lg font-semibold'>{item.instructorName}</span></p>
<span className='flex items-center gap-2 mt-6'><MdEventAvailable/>Available Seats: <span>{item.availableSeats}</span></span>
<span className='flex items-center gap-2'><FaDollarSign/>Price: <span>${item.price}</span></span>
<button
            className="btn text-white mt-4"
            style={{ backgroundColor: "#07332F" }}
          >
            Select
          </button>
</div>
                            </div>
                        </div>
              
        ))}
                </div>
            </div>
        </Container>
    );
};

export default PopularClasses;