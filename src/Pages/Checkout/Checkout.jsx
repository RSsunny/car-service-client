import { useLoaderData } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import banner from "../../assets/images/banner/5.jpg";
import axios from "axios";
const Checkout = () => {
  const { user } = useAuth();
  const { img, service_id, title, price } = useLoaderData();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const fristName = form.fristName.value;
    const lastName = form.lastName.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const massage = form.massage.value;
    const cleintuser = {
      img,
      service_id,
      title,
      fristName,
      lastName,
      phone,
      email,
      massage,
      price,
    };
    console.log(cleintuser);
    axios
      .post("http://localhost:5000/booking", cleintuser)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="max-w-7xl mx-auto">
      <div
        className="h-[300px] bg-cover object-cover bg-center lg:rounded-2xl flex items-center relative overflow-hidden"
        style={{ backgroundImage: `url("${banner}")` }}
      >
        <div className="absolute bg-black inset-0 opacity-60 "></div>
        <h1 className="text-white text-5xl font-bold ml-10 lg:ml-20 z-20">
          Check Out
        </h1>
        <div className="  absolute bottom-0  md:left-96 lg:left-[500px]">
          <h1 className="text-white  font-bold bg-red-500 w-60 text-center rounded-b rounded-3xl p-2">
            Home/Checkout
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
            name="fristName"
            placeholder="Frist Name"
          />
          <input
            className="flex-1 p-4 outline-none text-black rounded-md"
            type="text"
            name="lastName"
            placeholder="Last Name"
          />
        </div>
        <div className="flex justify-between gap-5 my-5">
          <input
            className="flex-1 p-4 outline-none text-black rounded-md"
            type="number"
            name="phone"
            placeholder="Your Phone"
          />
          <input
            className="flex-1 p-4 outline-none text-black rounded-md"
            type="text"
            name="email"
            placeholder="Your Email"
            defaultValue={user && user.email}
          />
        </div>
        <textarea
          name="massage"
          className="textarea w-full "
          placeholder="Your Message"
        ></textarea>
        <div className="text-white bg-red-500 p-3 text-center w-full my-5 rounded-md font-bold">
          <input type="submit" value="Order Confirm" />
        </div>
      </form>
    </div>
  );
};

export default Checkout;
