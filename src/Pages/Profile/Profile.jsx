import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Profile = () => {
  const { logOutuser } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    logOutuser()
      .then(() => {
        navigate("/");
      })
      .catch();
  };
  return (
    <div>
      <button
        onClick={handleLogout}
        className="text-2xl font-bold px-6 py-2 rounded-md border"
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;
