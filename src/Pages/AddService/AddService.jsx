import banner from "../../assets/images/banner/1.jpg";
const AddService = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const serviceName = form.serviceName.value;
    const servicePrice = form.servicePrice.value;
    const text = form.text.value;
    const serviceType = form.serviceType.value;
    // const massage = form.massage.value;
    const user = { serviceName, servicePrice, text, serviceType };
    console.log(user);
  };
  return (
    <div className="max-w-7xl mx-auto">
      <div
        className="h-[300px] bg-cover object-cover bg-center lg:rounded-2xl flex items-center relative overflow-hidden"
        style={{ backgroundImage: `url("${banner}")` }}
      >
        <div className="absolute bg-black inset-0 opacity-60 "></div>
        <h1 className="text-white text-5xl font-bold ml-10 lg:ml-20 z-20">
          Add New Service
        </h1>
        <div className="  absolute bottom-0  md:left-96 lg:left-[500px]">
          <h1 className="text-white  font-bold bg-red-500 w-60 text-center rounded-b rounded-3xl p-2">
            Home/Service
          </h1>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="p-20 bg-[#F3F3F3] my-10 lg:rounded-xl"
      >
        <div className="flex justify-between gap-5 my-5">
          <input
            className="flex-1 p-4 outline-none text-black rounded-md"
            type="text"
            name="serviceName"
            placeholder="Service Name"
          />
          <input
            className="flex-1 p-4 outline-none text-black rounded-md"
            type="text"
            name="servicePrice"
            placeholder="Service Price"
          />
        </div>
        <div className="flex justify-between gap-5 my-5">
          <input
            className="flex-1 p-4 outline-none text-black rounded-md"
            type="text"
            name="text"
            placeholder="Text here"
          />
          <input
            className="flex-1 p-4 outline-none text-black rounded-md"
            type="text"
            name="serviceType"
            placeholder="Service Type"
          />
        </div>
        <textarea
          type="massage"
          className="textarea w-full "
          placeholder="Product Description"
        ></textarea>
        <div className="text-white bg-red-600 p-3 text-center w-full my-5 rounded-md font-bold">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default AddService;
