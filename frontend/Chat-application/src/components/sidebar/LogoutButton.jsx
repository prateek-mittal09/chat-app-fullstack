
import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";
import { useAuthContext } from "../../context/AuthContext";

const LogoutButton = () => {
	const { loading, logout } = useLogout();
	const {authUser} = useAuthContext()

	return (
		<div className='mt-auto'>
			{!loading ? (
				<div className="flex flex-row">
				<BiLogOut className='w-6 h-6 text-white cursor-pointer' onClick={logout} />
				<div className="flex flex-row ">
				<img src={authUser.profilePic} className="w-5 rounded-full"/>
				<p>{authUser.username}</p>
				</div>
				</div>
			) : (
				<span className='loading loading-spinner'></span>
			)}
		</div>
	);
};
export default LogoutButton;
