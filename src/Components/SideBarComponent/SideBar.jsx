import SideBarCard from "./SideBarCard";
import RoadmapCard from "./RoadmapCard";
import Filtercard from "./Filtercard";
import { GiHamburgerMenu } from "react-icons/gi";
import Mobilesidebar from "./Mobilesidebar";
import React from "react";
import { setUser, clearUser } from "../Redux/User/action";
import { connect } from "react-redux";
import { supabase } from "../Supabase/Supabaseconfig";

function SideBar({ setUser, currentUser, clearUser }) {
  const [showSideBar, setShowSideBar] = React.useState(false);

  React.useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN" || "INITIAL_SESSION") {
        const user = session?.user;
        if (user) {
          setUser({
            email: user.email,
            id: user.id,
            userAvatar: user.user_metadata.userAvatar,
            userName: user.user_metadata.userName,
          });
        }
      }
      if (event === "SIGNED_OUT") {
        clearUser();
      }
    });
  }, []);

  function handleSidebar() {
    setShowSideBar(!showSideBar);
  }

  return (
    <div className="w-full mx-auto lg:w-[30%] items-center xl:items-baseline flex gap-x-6 lg:flex-col gap-y-5 lg:fixed lg:my-auto animate-slideLeft">
      <SideBarCard currentUser={currentUser} />
      {<Filtercard />}
      <RoadmapCard />
      <GiHamburgerMenu
        onClick={handleSidebar}
        color="white"
        size={24}
        className="absolute right-4 cursor-pointer md:hidden"
      />
      {showSideBar && <Mobilesidebar hideSidebar={setShowSideBar} />}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
  };
}

const mapDispatchToProps = {
  setUser,
  clearUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
