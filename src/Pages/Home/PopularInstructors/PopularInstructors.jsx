// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./PopularInstructors.css";

// import required modules
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { FaGithub, FaLinkedinIn, FaUserCircle } from "react-icons/fa";

import Container from "../../Shared/Container";
import SectionTitle from "../../../components/SectionTitle";
import { useEffect } from "react";
import { useState } from "react";
const PopularInstructors = () => {
  const [instructors, setInstructors] = useState([]);
  const [slidesPerView, setSlidesPerView] = useState(3); // Default to 3 slides per view
  
instructors.sort((a, b) => b.numberOfSeats - a.numberOfSeats);
const topInstructors = instructors.slice(0, 6);

  const determineSlidesPerView = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 1200) {
      return 3; 
    } else {
      return "auto"; 
    }
  };

  useEffect(() => {
    const updateSlidesPerView = () => {
      setSlidesPerView(determineSlidesPerView());
    };

    window.addEventListener("resize", updateSlidesPerView);
    // Initial update
    updateSlidesPerView();

    fetch("https://summer-camp-school-server-side.vercel.app/classes")
      .then((res) => res.json())
      .then((data) => setInstructors(data));

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateSlidesPerView);
    };
  }, []);
  return (
    <Container>
      <div className="mt-10 mb-20">
        <SectionTitle heading="POPULAR INSTRUCTORS" />
        <div className="my-custom-swiper max-w-[1600px] mx-auto -mt-20 overflow-hidden">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={slidesPerView}
          coverflowEffect={{
            rotate: 22,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
          initialSlide={1}
        >
            {topInstructors.map((item) => (
              <>
              <SwiperSlide>
                <div className="card w-[400px] mx-auto md:w-full h-[600px] glass p-6 transition-transform transform hover:-translate-y-2 mt-16">
                  <img
                    className=""
                    key={item._id}
                    src={item.instructorImage}
                    alt=""
                  />
                </div>
              </SwiperSlide>
              </>
            ))}
            <div className="slider-controler flex gap-8 mt-0 md:-mt-8">
              <div className="swiper-button-prev slider-arrow text-3xl">
                <AiOutlineArrowLeft className="text-[#07332F]" />
              </div>
              <div className="swiper-button-next slider-arrow text-3xl">
                <AiOutlineArrowRight className="text-[#07332F]" />
              </div>
            </div>
          </Swiper>
        </div>
      </div>
    </Container>
  );
};

export default PopularInstructors;

