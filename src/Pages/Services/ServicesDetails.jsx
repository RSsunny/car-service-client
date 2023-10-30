import { Link, useLoaderData } from "react-router-dom";
import banner from "../../assets/images/banner/4.jpg";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaFileDownload } from "react-icons/fa";
import logo from "../../assets/icons/Group 1.svg";
const ServicesDetails = () => {
  const details = useLoaderData();
  const { _id, title, img, price, facility } = details;
  console.log(details);
  return (
    <div className="max-w-7xl mx-auto">
      {/* banner */}
      <div
        className="h-[300px] bg-cover object-cover bg-center lg:rounded-2xl flex items-center relative overflow-hidden"
        style={{ backgroundImage: `url("${banner}")` }}
      >
        <div className="absolute bg-black inset-0 opacity-60 "></div>
        <h1 className="text-white text-5xl font-bold ml-10 lg:ml-20 z-20">
          Service Details
        </h1>
        <div className="  absolute bottom-0  md:left-96 lg:left-[500px]">
          <h1 className="text-white  font-bold bg-red-500 w-60 text-center rounded-b rounded-3xl p-2">
            Home/Service Details
          </h1>
        </div>
      </div>
      {/* Service Details */}
      <div className="grid grid-cols-12 gap-5 my-20">
        <div className="col-span-8 flex flex-col space-y-5">
          <img className="w-full h-80 rounded-md" src={img} alt="" />
          <h1 className=" text-2xl font-bold">{title}</h1>
          <p className="">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which dont look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isnt anything embarrassing hidden in the
            middle of text.{" "}
          </p>
          <div className="grid grid-cols-2 gap-5 ">
            {facility?.map((data, idx) => (
              <div
                key={idx}
                className="border-t-4 border-red-600 rounded-md bg-[#F3F3F3] p-5"
              >
                <h1>{data.name}</h1>
                <p>{data.details}</p>
              </div>
            ))}
          </div>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which dont look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there it anything embarrassing hidden in the middle
            of text.{" "}
          </p>
          <h1 className=" text-2xl font-bold">3 Simple Steps to Process</h1>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which dont look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there it anything embarrassing hidden in the middle
            of text.{" "}
          </p>
          <div className="flex gap-5 justify-between">
            <div className="border p-10 text-center ">
              <span className="p-3 bg-red-500 rounded-full border-4 border-red-200 text-white">
                01
              </span>
              <h1 className="font-bold my-3 mt-5">Step One</h1>
              <p>
                It uses a dictionary <br /> of over 200 .
              </p>
            </div>
            <div className="border p-10 text-center ">
              <span className="p-3 bg-red-500 rounded-full border-4 border-red-200 text-white">
                02
              </span>
              <h1 className="font-bold my-3 mt-5">Step two</h1>
              <p>
                It uses a dictionary <br /> of over 200 .
              </p>
            </div>
            <div className="border p-10 text-center ">
              <span className="p-3 bg-red-500 rounded-full border-4 border-red-200 text-white">
                03
              </span>
              <h1 className="font-bold my-3 mt-5">Step Three</h1>
              <p>
                It uses a dictionary <br /> of over 200 .
              </p>
            </div>
          </div>
        </div>
        {/* right sidbar */}
        <div className="col-span-4">
          <div className="flex flex-col space-y-4 bg-[#F3F3F3] p-8">
            <h1 className="text-2xl font-bold">Services</h1>
            <div className="flex justify-between p-4 lg:px-6 rounded-md border items-center bg-red-500 text-white">
              <h1 className=" font-bold ">Full Car Repair</h1>
              <AiOutlineArrowRight></AiOutlineArrowRight>
            </div>
            <div className="flex justify-between p-4 lg:px-6 rounded-md border items-center bg-white">
              <h1 className=" font-bold ">Engine Repair</h1>
              <AiOutlineArrowRight className="text-red-500"></AiOutlineArrowRight>
            </div>
            <div className="flex justify-between p-4 lg:px-6 rounded-md border items-center bg-white">
              <h1 className=" font-bold ">Automatic Servicesr</h1>
              <AiOutlineArrowRight className="text-red-500"></AiOutlineArrowRight>
            </div>
            <div className="flex justify-between p-4 lg:px-6 rounded-md border items-center bg-white">
              <h1 className=" font-bold ">Engine Oil Change</h1>
              <AiOutlineArrowRight className="text-red-500"></AiOutlineArrowRight>
            </div>
            <div className="flex justify-between p-4 lg:px-6 rounded-md border items-center bg-white">
              <h1 className=" font-bold ">Battery Charge</h1>
              <AiOutlineArrowRight className="text-red-500"></AiOutlineArrowRight>
            </div>
          </div>
          {/* downlode */}
          <div className="bg-black text-white p-8 my-10 rounded-xl">
            <h1 className="text-2xl font-bold">Download</h1>
            <div className="flex justify-between my-5 items-center">
              <div className="flex items-center  gap-4">
                <FaFileDownload className="text-3xl"></FaFileDownload>
                <div>
                  <h1 className="text-bold text-lg">Our Brochure</h1>
                  <h2>Download</h2>
                </div>
              </div>
              <AiOutlineArrowRight className="text-white bg-red-500 w-10 h-10 p-2"></AiOutlineArrowRight>
            </div>
            <div className="flex justify-between my-5 items-center">
              <div className="flex items-center  gap-4">
                <FaFileDownload className="text-3xl"></FaFileDownload>
                <div>
                  <h1 className="text-bold text-lg">Company Details</h1>
                  <h2>Download</h2>
                </div>
              </div>
              <AiOutlineArrowRight className="text-white bg-red-500 w-10 h-10 p-2"></AiOutlineArrowRight>
            </div>
          </div>
          {/* save up to 60% */}
          <div className="bg-black text-white p-12 my-10 rounded-xl text-center flex flex-col space-y-5 text-bold">
            <img className="w-32 mx-auto" src={logo} alt="" />
            <h1 className="text-2xl font-bold">Car Doctor</h1>
            <p className="font-bold">
              Need Help? We Are Here <br /> To Help You
            </p>
            <div className="relative bg-white text-black font-bold px-5 py-12 rounded-xl text-center">
              <h1 className="text-xl">
                <span className="text-red-500">Car Doctor</span> Special
              </h1>
              <h2>
                Save up to <span className="text-red-500">60% off</span>
              </h2>
              <h1 className="bg-red-500 p-2 text-white absolute rounded-md -bottom-4 left-16 lg:left-28">
                Get A Quote
              </h1>
            </div>
          </div>
          <h1 className="text-3xl font-bold">price $ {price}</h1>
          <div className="text-white bg-red-500 p-3 text-center w-full my-5 rounded-md font-bold">
            <Link to={`/checkout/${_id}`}>Proceed Checkout</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDetails;
