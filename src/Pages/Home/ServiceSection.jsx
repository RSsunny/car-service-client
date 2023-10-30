import useServices from "../../Hooks/useServices";
import ServiceCard from "./ServiceCard";

const ServiceSection = () => {
  const { isPending, error, data } = useServices();

  return (
    <div>
      <div className="text-center">
        <h1 className="text-red-500 font-bold mb-5 text-center">Service</h1>
        <h2 className="text-3xl font-bold">Our Service Area</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which dont look even slightly
          believable.{" "}
        </p>
      </div>
      {/* service card */}
      <div className="grid grid-cols-3 justify-between gap-10 my-10">
        {data?.map((service) => (
          <ServiceCard key={service._id} card={service}></ServiceCard>
        ))}
      </div>
      <h1 className="border w-40 py-2 mx-auto text-center border-red-500 text-red-500 font-semibold">
        More Services
      </h1>
    </div>
  );
};

export default ServiceSection;
