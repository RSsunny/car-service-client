import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "./slider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import banner1 from "../../assets/images/banner/5.jpg";
import banner2 from "../../assets/images/banner/3.jpg";
import banner3 from "../../assets/images/banner/2.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto lg:rounded-2xl overflow-hidden  ">
      {" "}
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="bg-center bg-cover    h-[500px] flex items-center  text-white"
            style={{ backgroundImage: `url("${banner1}")` }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="ml-20  absolute">
              <h1 className="text-4xl font-bold   my-5">
                Affordable <br /> Price For Car <br /> Servicing
              </h1>
              <p className="w-[450px]">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex items-center gap-10">
                {" "}
                <Link className="bg-[#FF3811] px-6 py-2 my-5 rounded-md font-bold">
                  Discover More
                </Link>
                <Link className="border border-white px-6 py-2 my-5 rounded-md font-bold">
                  Latest Project
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="bg-center bg-cover h-[500px] flex items-center relative text-white"
            style={{ backgroundImage: `url("${banner2}")` }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="ml-20  absolute">
              <h1 className="text-4xl font-bold   my-5">
                Affordable <br /> Price For Car <br /> Servicing
              </h1>
              <p className="w-[450px]">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex items-center gap-10">
                {" "}
                <Link className="bg-[#FF3811] px-6 py-2 my-5 rounded-md font-bold">
                  Discover More
                </Link>
                <Link className="border border-white px-6 py-2 my-5 rounded-md font-bold">
                  Latest Project
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="bg-center bg-cover h-[500px] flex items-center relative text-white"
            style={{ backgroundImage: `url("${banner3}")` }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="ml-20  absolute">
              <h1 className="text-4xl font-bold   my-5">
                Affordable <br /> Price For Car <br /> Servicing
              </h1>
              <p className="w-[450px]">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex items-center gap-10">
                {" "}
                <Link className="bg-[#FF3811] px-6 py-2 my-5 rounded-md font-bold">
                  Discover More
                </Link>
                <Link className="border border-white px-6 py-2 my-5 rounded-md font-bold">
                  Latest Project
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
