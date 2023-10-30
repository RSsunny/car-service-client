import { Link, useLocation, useNavigate } from "react-router-dom";
import imagelog from "../../assets/images/login/login.svg";
import { BsFacebook, BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";

const Login = () => {
  const { signinuser, mediaSignin } = useAuth();
  const page = useLocation();
  const navigate = useNavigate();
  console.log(page);
  const handlelog = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signinuser(email, password)
      .then((result) => {
        navigate(`${page.state ? page.state : "/"}`);
        console.log(result);
      })
      .then((error) => {
        console.log(error);
      });
  };

  const handleMedia = () => {
    mediaSignin()
      .then((result) => {
        // <navigate to={page.state ? `/${page.state}` : "/"}></navigate>;
        // console.log("achi");

        const loginuser = result.user;
        const usereemail = loginuser.email;
        const user = { usereemail };
        console.log(user);
        axios
          .post(`http://localhost:5000/jwt`, user, { withCredentials: true })
          .then((res) => {
            console.log(res.data);
            if (res.data.success) {
              return navigate(`${page.state ? page.state : "/"}`);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch();
  };
  return (
    <div className="max-w-7xl mx-auto flex justify-between items-center gap-20 my-20">
      <div>
        <img src={imagelog} alt="" />
      </div>
      <div>
        <form
          onSubmit={handlelog}
          className="flex flex-col gap-3 md:border p-3 md:p-10 rounded-2xl"
        >
          <h1 className="text-4xl font-bold  text-[#FF4512] text-center mb-5">
            Login{" "}
          </h1>
          <label htmlFor="email">
            <h1 className=" font-semibold">Email :</h1>
            <input
              //   ref={emailref}
              className="outline-none border p-2 text-[#FF4512] w-[300px] md:w-[500px] my-3"
              type="email"
              name="email"
              id="8"
              required
            />
          </label>
          <label htmlFor="password">
            <h1 className=" font-semibold">Password :</h1>
            <input
              className="outline-none border p-2 text-[#FF4512] w-full md:w-[500px] mt-3"
              type="password"
              name="password"
              id="9"
              required
            />
          </label>
          <div>
            <h1
              //   onClick={resetPass}
              className="text-xs text-red-500 cursor-pointer hover:border-b inline-block border-red-500"
            >
              forget password?
            </h1>
          </div>
          <div>
            <input
              className="w-full p-2 bg-[#FF4512] hover:bg-opacity-90 text-white font-rancho text-2xl"
              type="submit"
              value="Login"
            />
          </div>
          {/* {error && <h1 className="text-xs text-red-500">{error}</h1>}
          {success && <h1 className="text-xs text-green-500">{success}</h1>} */}
          <div className="flex justify-center items-center gap-5">
            <div className="border-2 w-12 md:w-40 border-black"></div>
            <div className="text-3xl font-rancho">or</div>
            <div className="border-2 w-12 md:w-40 border-black"></div>
          </div>
          <div className="flex justify-center gap-5 text-3xl">
            <BsFacebook className="text-blue-700 hover:scale-125 duration-300 cursor-pointer"></BsFacebook>
            <FcGoogle
              onClick={handleMedia}
              className="hover:scale-125 duration-300 cursor-pointer"
            ></FcGoogle>
            <BsGithub className="hover:scale-125 duration-300 cursor-pointer"></BsGithub>
          </div>
          <h1 className="mt-5">
            Yue have not a account?{" "}
            <Link to={"/register"} className="text-red-500 font-bold">
              Register
            </Link>
          </h1>
        </form>
      </div>
    </div>
  );
};

export default Login;
