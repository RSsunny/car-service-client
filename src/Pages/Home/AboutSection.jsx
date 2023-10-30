import { Link } from "react-router-dom";
import aboutus1 from "../../assets/images/about_us/parts.jpg";
import aboutus2 from "../../assets/images/about_us/person.jpg";

const AboutSection = () => {
  return (
    <div className="flex justify-between  gap-5 my-20">
      <div className="relative w-[900px] h-[400px] flex-1">
        <img className="w-4/5 h-full" src={aboutus2} alt="" />
        <img
          className="absolute -bottom-10 right-0 w-60 h-60 border-8 border-white"
          src={aboutus1}
          alt=""
        />
      </div>
      <div className="flex-1">
        <h1 className="text-red-500 font-bold  mb-5">About Us</h1>
        <h2 className="text-5xl mb-5 font-bold">
          We are qualified <br /> & of experience <br /> in this field
        </h2>
        <p className="w-[500px]">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which dont look even slightly believable.{" "}
        </p>
        <p className="w-[500px] mb-8">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which dont look even slightly believable.{" "}
        </p>
        <Link
          to={"/about"}
          className="bg-[#FF3811] px-6 py-2 my-5 rounded-md font-bold text-white"
        >
          Get More Info
        </Link>
      </div>
    </div>
  );
};

export default AboutSection;
