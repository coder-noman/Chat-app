import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
  return (
    <div className="flex gap-4 sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-purple-800 border border-black">
      {/* <div className="bg-purple-800 border border-black "> */}
        <Sidebar />
      {/* </div> */}
      {/* <div className="bg-purple-800 border border-black "> */}
        <MessageContainer />
      {/* </div> */}
    </div>
  );
};
export default Home;

//bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0
