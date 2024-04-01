import React from "react";
import Sidebar from "../../components/SideBar/Sidebar";
import MessageContainer from "../../components/messageContainer.jsx/MessageContainer";
import Heading from "../../components/Heading";
const Home = () => {
  return (
    <div className="flex flex-col w-full justify-center   mx-1 sm:mx-6 md:mx-8 lg:mx-[10rem] items-center">
      <Heading />
      <div className="flex w-full  max-h-[40rem] min-h-[40rem]  rounded-lg bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 justify-center">
        <Sidebar />
        <MessageContainer />
      </div>
    </div>
  );
};

export default Home;
