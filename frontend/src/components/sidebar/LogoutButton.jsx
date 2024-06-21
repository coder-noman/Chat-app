import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";
import { useAuthContext } from "../../context/AuthContext";

const LogoutButton = () => {
  const { loading, logout } = useLogout();
  const { authUser } = useAuthContext();

  return (
    <div className="flex justify-between items-center">
      <div className=" mt-0 ">
        {!loading ? (
          <BiLogOut
            className=" w-8 h-8 text-white cursor-pointer"
            onClick={logout}
          />
        ) : (
          <span className="loading loading-spinner"></span>
        )}
      </div>
      <div className="flex justify-center items-center gap-2">
        <span className="text-white font-bold text-xl">
          {authUser.fullName}
        </span>
        <div className=" w-10 rounded-full">
          <img src={authUser.profilePic} alt="user avatar" />
        </div>
      </div>
    </div>
  );
};
export default LogoutButton;
