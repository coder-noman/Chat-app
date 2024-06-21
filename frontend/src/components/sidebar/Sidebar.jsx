// STARTER CODE FOR THIS FILE
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
	return (
		<div className='border-r-2 border-purple-900 p-4 flex flex-col'>
			<SearchInput />
			<div className='divider px-2 '></div>
			<Conversations />
			<div className='divider px-2'></div>
			<LogoutButton />
		</div>
	);
};
export default Sidebar;