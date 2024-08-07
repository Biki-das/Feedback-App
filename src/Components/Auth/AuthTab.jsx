import React from "react";
import { Link, useLocation } from "react-router-dom";
import * as Tabs from "@radix-ui/react-tabs";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { RemoveScroll } from "react-remove-scroll";
import { connect } from "react-redux";
import { setUser } from "../../Redux/User/action";
import { motion } from "framer-motion";

function TabsDemo({ setUser }) {
  const location = useLocation();
  const [avatarUrl, setAvatarUrl] = React.useState(null);
  const [activeTab, setActiveTab] = React.useState(
    location.pathname.slice(1) || "signin"
  );

  React.useEffect(() => {
    getRandomAvatar();
  }, [location.pathname]);

  function getRandomAvatar() {
    const randomSeed = Math.random().toString(36).substring(7);
    const apiUrl = `https://api.dicebear.com/7.x/avataaars/svg?seed=${randomSeed}`;
    setAvatarUrl(apiUrl);
  }

  return (
    <RemoveScroll>
      <Tabs.Root
        className="TabsRoot"
        defaultValue={location.pathname.slice(1) || "one"}
        onValueChange={(value) => setActiveTab(value)}
      >
        <div className="bg-white h-[200px] flex justify-center items-center">
          <img src={avatarUrl} className="h-[80px] rounded-full" />
        </div>
        <Tabs.List className="TabsList" aria-label="Manage your account">
          <Tabs.Trigger className="TabsTrigger" value="signin" asChild>
            <Link to="/signin" replace>
              Login
            </Link>
          </Tabs.Trigger>
          <Tabs.Trigger className="TabsTrigger" value="signup" asChild>
            <Link to="/signup" replace>
              Signup
            </Link>
          </Tabs.Trigger>
          <motion.div
            initial={false}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 30,
            }}
            animate={{ x: activeTab === "signin" ? "0%" : "100%" }}
            className="w-[50%] bottom-0 translate-x-[100%] left-0 bg-purple-600 h-[10%] absolute"
          ></motion.div>
        </Tabs.List>
        <Tabs.Content className="TabsContent mt-3" value="signin">
          <SignIn />
        </Tabs.Content>
        <Tabs.Content className="TabsContent" value="signup">
          <SignUp avatarUrl={avatarUrl} setUser={setUser} />
        </Tabs.Content>
      </Tabs.Root>
    </RemoveScroll>
  );
}

function AuthTab({ setUser }) {
  return <TabsDemo setUser={setUser} />;
}

const mapDispatchToProps = {
  setUser,
};

export default connect(null, mapDispatchToProps)(AuthTab);
