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
				<BiLogOut className='w-6 h-6 text-white cursor-pointer' onClick={handlelogout}/>
			) : (
				<span className='loading loading-spinner'></span>
			)}
		</div>
	);
};
export default LogoutButton;