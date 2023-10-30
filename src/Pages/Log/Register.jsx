import { Link, useLocation, useNavigate } from "react-router-dom";
import imagelog from "../../assets/images/login/login.svg";
import useAuth from "../../Hooks/useAuth";
const Register = () => {
  const { createuser } = useAuth();
  const navigate = useNavigate();
  const page = useLocation();
  const handlesubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const fristName = form.fristName.value;
    const lastName = form.lastName.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const password = form.password.value;
    const confpassword = form.confpassword.value;
    const checkbox = form.checkbox.value;
    const user = {
      fristName,
      lastName,
      phone,
      email,
      password,
      confpassword,
      checkbox,
    };
    createuser(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(`${page.state ? page.state : "/"}`);
      })
      .then((error) => {
        console.log(error);
      });
    console.log(user);
  };
  return (
    <div className="max-w-7xl mx-auto flex justify-between items-center gap-20 my-20">
      <div>
        <img src={imagelog} alt="" />
      </div>
      <div>
        <form
          onSubmit={handlesubmit}
          className="flex flex-col md:gap-3 border p-2 md:px-10"
        >
          <h1 className="text-4xl font-rancho text-[#FF4512] text-center mb-5">
            Register
          </h1>
          <label htmlFor="fristName">
            <h1 className=" font-semibold">Frist Name :</h1>
            <input
              className="outline-none border p-2 text-[#FF4512] w-[300px] md:w-[500px] my-3"
              type="text"
              name="fristName"
              id="1"
              required
            />
          </label>
          <label htmlFor="lastName">
            <h1 className=" font-semibold">Last Name :</h1>
            <input
              className="outline-none border p-2 text-[#FF4512] w-[300px]  md:w-[500px] my-3"
              type="text"
              name="lastName"
              id="2"
              required
            />
          </label>
          <label htmlFor="phone">
            <h1 className=" font-semibold">Phone :</h1>
            <input
              className="outline-none border p-2 text-[#FF4512] w-[300px]  md:w-[500px] my-3"
              type="number"
              name="phone"
              id="3"
              required
            />
          </label>
          <label htmlFor="email">
            <h1 className=" font-semibold">Email :</h1>
            <input
              className="outline-none border p-2 text-[#FF4512] w-[300px]  md:w-[500px] my-3"
              type="email"
              name="email"
              id="4"
              required
            />
          </label>
          <label htmlFor="password">
            <h1 className=" font-semibold">Password :</h1>
            <input
              className="outline-none border p-2 text-[#FF4512] w-[300px]  md:w-[500px] mt-3"
              type="password"
              name="password"
              id="5"
              required
            />
          </label>
          <label htmlFor="confpassword">
            <h1 className=" font-semibold">Confrom Password :</h1>
            <input
              className="outline-none border p-2 text-[#FF4512] w-[300px]  md:w-[500px] mt-3"
              type="password"
              name="confpassword"
              id="6"
              required
            />
          </label>
          <div className="flex flex-col md:flex-row items-center md:gap-3 text-xs  justify-between mt-2 md:mt-0">
            <div className="flex gap-2">
              <input
                className="cursor-pointer"
                type="checkbox"
                name="checkbox"
                id="7"
              />
              <p className="text-xs">
                Our treams and condition{" "}
                <Link className="font-semibold">read more ...</Link>{" "}
              </p>
            </div>
            <h1 className="">
              Yue have an account?
              <Link to={"/login"} className="text-green-500 font-bold">
                Login
              </Link>
            </h1>
          </div>

          <div className="mt-5">
            <input
              className="w-full p-2 bg-[#FF4512] hover:bg-opacity-90 text-white font-rancho text-2xl"
              type="submit"
              value="Register"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
