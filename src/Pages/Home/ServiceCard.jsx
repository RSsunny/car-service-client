import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
const ServiceCard = ({ card }) => {
  console.log(Object.keys(card).join(","));
  const { _id, service_id, title, img, price, description, facility } = card;
  return (
    <div>
      <div className="h-[200px] rounded-xl overflow-hidden">
        <img className="h-full w-full" src={img} alt="" />
      </div>
      <h1 className="text-2xl font-bold">{title}</h1>
      <div className="flex justify-between text-red-500 items-center mr-5">
        <p className="font-semibold">Price:$ {price}</p>
        <Link to={`/services/${_id}`}>
          <AiOutlineArrowRight></AiOutlineArrowRight>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
