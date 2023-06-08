import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Container from '../../Shared/Container';
const Banner = () => {
  return (
    <Container>
      <div className="flex:none lg:flex justify-center items-center bg-gradient-to-r from-teal-700 to-emerald-900 pb-48 pt-10  min-w-[640px] ">
        <div className=" w-96 lg:w-1/2 ml-5">
          <h1 className="w-[500px] text-4xl uppercase font-bold mb-4 text-gray-300">Welcome to Artisans Camp - Where Creativity Flourishes</h1>
          <p className='text-gray-300 font-bold'>Ignite your creativity at Artisans Camp! Discover the world of art and craft through immersive workshops, expert guidance, and hands-on experiences. Unleash your imagination, learn new techniques, and create stunning masterpieces. Join our vibrant community of artists, embrace the joy of self-expression, and unlock your artistic potential. Experience the transformative power of art at Artisans Camp and let your creativity shine. Elevate your skills, connect with fellow artists, and embark on an unforgettable artistic journey. Welcome to Artisans Camp, where artistry meets inspiration.</p>
          <div className='flex gap-5 mt-4'>
          <button className="btn text-white" style={{backgroundColor:"#07332F"}}>Success</button>
          <button className="btn btn-outline btn-accent text-white">Accent</button>
          </div>
        </div>
        <div className="w-1/2 ml:0 lg:ml-72 mr-4">
          <Swiper
            slidesPerView={3}
            spaceBetween={10}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide><img className='w-[350px] h-[400px] rounded-lg' src="https://i.ibb.co/5TGqL9N/children-boy-girl-doing-homework-drawing-together-garden-home.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img className='w-[350px] h-[400px] rounded-lg' src="https://i.ibb.co/dDRMNNG/girls-painting-floor-box-pencils-papers.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img className='w-[350px] h-[400px] rounded-lg' src="https://i.ibb.co/vjVwGD0/boy-girl-painting.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img className='w-[350px] h-[400px] rounded-lg' src="https://i.ibb.co/K5Tn6rm/people-meeting-community-center.jpg"  alt="" /></SwiperSlide>
            <SwiperSlide><img className='w-[350px] h-[400px] rounded-lg' src="https://i.ibb.co/TqfFPt1/people-making-paper-flowers-craft-art-work-handicraft.jpg"  alt="" /></SwiperSlide>
            <SwiperSlide><img className='w-[350px] h-[400px] rounded-lg' src="https://i.ibb.co/BzKJQDg/mosaic-puzzle-art-kids-children-s-creative-game-hands-are-playing-mosaic-table-colorful-multi-colore.jpg"  alt="" /></SwiperSlide>
            <SwiperSlide><img className='w-[350px] h-[400px] rounded-lg' src="https://i.ibb.co/FYHtNnC/medium-shot-smiley-kids-indoors.jpg" alt="" /></SwiperSlide>
          </Swiper>
        </div>
      </div>
    </Container>
  );
};

export default Banner;