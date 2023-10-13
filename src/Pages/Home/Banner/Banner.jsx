import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Container from '../../Shared/Container';
import { useState } from 'react';
import { useEffect } from 'react';

const Banner = () => {
  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    // Update slidesPerView based on screen width
    const updateSlidesPerView = () => {
      if (window.innerWidth >= 1680) {
        setSlidesPerView(3); // Extra large screens
      }else if(window.innerWidth>=1280){
        setSlidesPerView(2)
      } else if (window.innerWidth >= 1024) {
        setSlidesPerView(1); // Large screens
      } else if (window.innerWidth >= 640) {
        setSlidesPerView(2); // Medium screens
      } else {
        setSlidesPerView(1); // Small screens
      }
    };

    // Call the function initially
    updateSlidesPerView();

    // Update slidesPerView when the window is resized
    window.addEventListener('resize', updateSlidesPerView);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateSlidesPerView);
    };
  }, []);
  return (
    <div className='bg-gradient-to-r from-teal-700 to-emerald-900'>
    <Container>
      <div className="flex flex-col lg:flex-row gap-3 justify-center items-center pb-10 lg:pb-48 pt-10">
        <div className="w-full lg:w-1/2 ml-5 md:ml-5 mx-auto mb-10 lg:mb-0">
          <h1 className="w-full lg:w-full xl:w-full text-xl md:text-2xl uppercase font-bold mb-4 text-gray-300">Welcome to Artisans Camp - Where<br></br> Creativity Flourishes</h1>
          <p className='text-gray-300 font-bold w-full lg:w-full '>Ignite your creativity at Artisans Camp! Discover the world of art and craft through immersive workshops, expert guidance, and hands-on experiences. Unleash your imagination, learn new techniques, and create stunning masterpieces. Join our vibrant community of artists, embrace the joy of self-expression, and unlock your artistic potential. Experience the transformative power of art at Artisans Camp and let your creativity shine. Elevate your skills, connect with fellow artists, and embark on an unforgettable artistic journey. Welcome to Artisans Camp, where artistry meets inspiration.</p>
          <div className='flex gap-5 mt-4'>
            <button className="btn text-white" style={{ backgroundColor: "#07332F" }}>Success</button>
            <button className="btn btn-outline btn-accent text-white">Accent</button>
          </div>
        </div>
        <div className="w-full md:w-full lg:w-1/2  mx-auto mr-2">
          <Swiper
            slidesPerView={slidesPerView}
            spaceBetween={8}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide><img className='object-cover w-full md:w-[400px] h-full md:h-[300px] lg:h-[400px] rounded-lg' src="https://i.ibb.co/5TGqL9N/children-boy-girl-doing-homework-drawing-together-garden-home.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img className='object-cover w-full md:w-[400px] h-full md:h-[300px] lg:h-[400px] rounded-lg' src="https://i.ibb.co/dDRMNNG/girls-painting-floor-box-pencils-papers.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img className='object-cover w-full md:w-[400px] h-full md:h-[300px] lg:h-[400px] rounded-lg' src="https://i.ibb.co/vjVwGD0/boy-girl-painting.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img className='object-cover w-full md:w-[400px] h-full md:h-[300px] lg:h-[400px] rounded-lg' src="https://i.ibb.co/K5Tn6rm/people-meeting-community-center.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img className='object-cover w-full md:w-[400px] h-full md:h-[300px] lg:h-[400px] rounded-lg' src="https://i.ibb.co/TqfFPt1/people-making-paper-flowers-craft-art-work-handicraft.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img className='object-cover w-full md:w-[400px] h-full md:h-[300px] lg:h-[400px] rounded-lg' src="https://i.ibb.co/BzKJQDg/mosaic-puzzle-art-kids-children-s-creative-game-hands-are-playing-mosaic-table-colorful-multi-colore.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img className='object-cover w-full md:w-[400px] h-full md:h-[300px] lg:h-[400px] rounded-lg' src="https://i.ibb.co/FYHtNnC/medium-shot-smiley-kids-indoors.jpg" alt="" /></SwiperSlide>
          </Swiper>
        </div>
      </div>
    </Container>
  </div>
  );
};

export default Banner;
