import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import { SlSizeFullscreen } from "react-icons/sl";
import { VscLayoutStatusbar } from "react-icons/vsc";
import { FaRegMoneyBill1 } from "react-icons/fa6";
import "./slider.css";

const Slider = () => {
  const [slider, setSlider] = useState([]);

  useEffect(() => {
    fetch("residential.json")
      .then((res) => res.json())
      .then((data) => setSlider(data));
  }, []);

  return (
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
    >
      {slider.map(
        (slides, index) =>
          slides.slide && (
            <SwiperSlide key={index}>
              <div
                data-aos="fade-zoom-in"
                className="bg-no-repeat bg-cover bg-center"
                style={{
                  backgroundImage: slides.slide
                    ? `url(${slides.slide})`
                    : "none",
                }}
              >
                <div className="hero-overlay bg-opacity-20">
                  <div className="text-white lg:px-[200px] py-40">
                    <div className="bg-[#2B3440] bg-opacity-80  text-center py-5 md:rounded-md lg:rounded-full w-full">
                      <div className="mx-5">
                        <span className="text-white px-5 py-1 rounded-full bg-[#A62F03]">
                          {slides.segment_name}
                        </span>
                        <h1 className="text-[45px] font-bold">
                          {slides.estate_title}
                        </h1>
                        <div className="flex gap-5 my-3 justify-center">
                          <div className="flex justify-center items-center gap-2">
                            <span>
                              <SlSizeFullscreen />
                            </span>{" "}
                            <span>{slides.area} </span>
                          </div>
                          <div className="flex justify-center items-center gap-2">
                            <span>
                              <VscLayoutStatusbar />
                            </span>{" "}
                            <span>{slides.status} </span>
                          </div>
                          <div className="flex justify-center items-center gap-2">
                            <span className="text-[20px]">
                              <FaRegMoneyBill1 />
                            </span>{" "}
                            <span>{slides.price} </span>
                          </div>
                        </div>
                        <div className="hidden md:block">
                          <p className="max-w-[900px] m-auto flex justify-center gap-1 items-center">
                            <span>
                              <FaMapMarkerAlt />
                            </span>
                            <span>{slides.location.address},</span>
                            <span>{slides.location.city},</span>
                            <span>{slides.location.state},</span>
                            <span>{slides.location.zipcode}</span>
                          </p>
                        </div>
                        <Link to={`/details/${slides.id}`}>
                          <button className="bg-[#A62F03] px-[100px] py-[10px] rounded-full mt-5 ">
                            View Property
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )
      )}
    </Swiper>
  );
};

export default Slider;
