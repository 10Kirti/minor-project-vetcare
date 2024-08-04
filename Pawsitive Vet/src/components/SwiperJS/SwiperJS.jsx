import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";

// image-import 
import robert from '../../assets/Images/robert.png';

function SwiperJS() {
  return (
    <>
      <div className="feedback">
        <div className="container m-auto">
            <div className="text-black text-center text-4xl font-bold relative top-[-50px]">
                <h2>Happy Clients & Feedbacks</h2>
            </div>
          <Swiper
           slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="relative py-10 shadow-md bg-custom_gray px-5 rounded-md">
                <div className=" rounded-full bg-custom_green  absolute top-[-15%] left-[10%]">
                  <i className="fa-solid fa-quote-left text-white text-3xl p-5"></i>
                </div>
                <p className="text-gray-400 px-3">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <div className="flex items-center gap-4 mt-5">
                  <img
                    src={robert}
                    alt="man"
                    className="rounded-full h-[100px]"
                  />
                  <div className="px-4">
                    <h2 className="text-3xl font-semibold">Robert Scott</h2>
                    <span>Marketing Manager</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative py-10 shadow-md bg-custom_gray px-5 rounded-md">
                <div className=" rounded-full bg-custom_green  absolute top-[-15%] left-[10%]">
                  <i className="fa-solid fa-quote-left text-white text-3xl p-5"></i>
                </div>
                <p className="text-gray-400 px-3">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <div className="flex items-center gap-4 mt-5">
                  <img
                    src={robert}
                    alt="man"
                    className="rounded-full h-[100px]"
                  />
                  <div className="px-4">
                    <h2 className="text-3xl font-semibold">Robert Scott</h2>
                    <span>Marketing Manager</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative py-10 shadow-md bg-custom_gray px-5 rounded-md">
                <div className=" rounded-full bg-custom_green  absolute top-[-15%] left-[10%]">
                  <i className="fa-solid fa-quote-left text-white text-3xl p-5"></i>
                </div>
                <p className="text-gray-400 px-3">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <div className="flex items-center gap-4 mt-5">
                  <img
                    src={robert}
                    alt="man"
                    className="rounded-full h-[100px]"
                  />
                  <div className="px-4">
                    <h2 className="text-3xl font-semibold">Robert Scott</h2>
                    <span>Marketing Manager</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative py-10 shadow-md bg-custom_gray px-5 rounded-md">
                <div className=" rounded-full bg-custom_green  absolute top-[-15%] left-[10%]">
                  <i className="fa-solid fa-quote-left text-white text-3xl p-5"></i>
                </div>
                <p className="text-gray-400 px-3">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <div className="flex items-center gap-4 mt-5">
                  <img
                    src={robert}
                    alt="man"
                    className="rounded-full h-[100px]"
                  />
                  <div className="px-4">
                    <h2 className="text-3xl font-semibold">Robert Scott</h2>
                    <span>Marketing Manager</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative py-10 shadow-md bg-custom_gray px-5 rounded-md">
                <div className=" rounded-full bg-custom_green  absolute top-[-15%] left-[10%]">
                  <i className="fa-solid fa-quote-left text-white text-3xl p-5"></i>
                </div>
                <p className="text-gray-400 px-3">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <div className="flex items-center gap-4 mt-5">
                  <img
                    src={robert}
                    alt="man"
                    className="rounded-full h-[100px]"
                  />
                  <div className="px-4">
                    <h2 className="text-3xl font-semibold">Robert Scott</h2>
                    <span>Marketing Manager</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative py-10 shadow-md bg-custom_gray px-5 rounded-md">
                <div className=" rounded-full bg-custom_green  absolute top-[-15%] left-[10%]">
                  <i className="fa-solid fa-quote-left text-white text-3xl p-5"></i>
                </div>
                <p className="text-gray-400 px-3">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <div className="flex items-center gap-4 mt-5">
                  <img
                    src={robert}
                    alt="man"
                    className="rounded-full h-[100px]"
                  />
                  <div className="px-4">
                    <h2 className="text-3xl font-semibold">Robert Scott</h2>
                    <span>Marketing Manager</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative py-10 shadow-md bg-custom_gray px-5 rounded-md">
                <div className=" rounded-full bg-custom_green  absolute top-[-15%] left-[10%]">
                  <i className="fa-solid fa-quote-left text-white text-3xl p-5"></i>
                </div>
                <p className="text-gray-400 px-3">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <div className="flex items-center gap-4 mt-5">
                  <img
                    src={robert}
                    alt="man"
                    className="rounded-full h-[100px]"
                  />
                  <div className="px-4">
                    <h2 className="text-3xl font-semibold">Robert Scott</h2>
                    <span>Marketing Manager</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
export default SwiperJS;
