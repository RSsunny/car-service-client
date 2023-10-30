import icon1 from "../../assets/icons/001-timetable.png";
import icon2 from "../../assets/icons/Group 34.svg";
import icon3 from "../../assets/icons/Group 35.png";
const ContactSection = () => {
  return (
    <div className="flex justify-between items-center p-10 bg-black text-white my-10 rounded-xl lg:px-20">
      <div className="flex items-center gap-3 ">
        <img src={icon1} alt="" />
        <div>
          <h1>We are open monday-friday</h1>
          <span className="font-bold text-xl">7:00 am - 9:00 pm</span>
        </div>
      </div>
      <div className="flex items-center gap-3 ">
        <img src={icon2} alt="" />
        <div>
          <h1>Have a question?</h1>
          <span className="font-bold text-xl">+2546 251 2658</span>
        </div>
      </div>
      <div className="flex items-center gap-3 ">
        <img src={icon3} alt="" />
        <div>
          <h1>Need a repair? our address</h1>
          <span className="font-bold text-xl">Liza Street, New York</span>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
