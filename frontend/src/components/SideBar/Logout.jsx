import { BiLogOut } from "react-icons/bi";
import { useLogout } from "../../hooks/useLogout";
import { useConversation } from "../../zustand-store/useConversation";

const LogoutButton = () => {

	
	const { loading, logout } = useLogout();
    const handlelogout=()=>{
		console.log("dasf");
		logout();
	}
	return (
		<div className='mt-auto'>
			{!loading ? (
				<div className="flex items-center cursor-pointer " onClick={handlelogout}>
				 <BiLogOut className='w-8 h-8  text-white cursor-pointer' /> <span className=" mx-2 text-white text-2xl">Logout</span>
				</div>
				
			) : (
				<span className='loading loading-spinner'></span>
			)}
		</div>
	);
};
export default LogoutButton;