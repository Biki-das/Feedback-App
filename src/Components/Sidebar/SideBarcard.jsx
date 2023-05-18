import React from "react";
import { TbLogin } from "react-icons/tb";
import { Link } from "react-router-dom";
import Logout from "../Auth/Logout";

function SideBarCard({ currentUser }) {
  const [showLogOut, setShowLogOut] = React.useState(false);

  return (
    <div className="px-6 flex items-center md:items-stretch py-2 bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-yellow-500 via-purple-500 to-blue md:w-[280px] h-[70px] md:h-[200px] 2xl:h-[200px] md:rounded-lg relative w-full">
      <div
        className="flex gap-x-2 cursor-pointer h-fit absolute top-3 right-12 md:static md:mt-4"
        tabIndex={0}
      >
        {currentUser && currentUser.user ? (
          <div>
            <div
              className="text-white flex"
              onClick={() => {
                setShowLogOut(!showLogOut);
              }}
            >
              <img
                src={currentUser.user.userAvatar}
                className="h-[40px] rounded-full"
              />
              <div className="hidden md:block">
                <span className="block">{currentUser?.user.email}</span>
                <span className="block font-bold text-sm">{`@${currentUser.user.userName}`}</span>
              </div>
            </div>
            {showLogOut && <Logout />}
          </div>
        ) : null}
        {!currentUser.user ? (
          <Link to={"/signin"}>
            {" "}
            <TbLogin size={24} color="white" />
            <span className="text-white text-base">Login</span>
          </Link>
        ) : null}
      </div>
      <div>
        <h1 className="text-white font-bold md:text-2xl md:absolute md:bottom-12 md:left-6">
          Apple
        </h1>
        <p className="text-white md:absolute md:bottom-6 md:left-6 text-sm">
          Feedback Board
        </p>
      </div>
    </div>
  );
}

export default SideBarCard;
