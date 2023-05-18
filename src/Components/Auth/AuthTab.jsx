import React from "react";
import { Link, useLocation } from "react-router-dom";
import * as Tabs from "@radix-ui/react-tabs";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { RemoveScroll } from "react-remove-scroll";
import { connect } from "react-redux";
import { setUser } from "../Store/User/action";

function TabsDemo({ setUser }) {
  const location = useLocation();
  const [avatarUrl, setAvatarUrl] = React.useState(null);

  React.useEffect(() => {
    getAvatar();
  }, [location.pathname]);

  async function getAvatar() {
    const cacheBuster = Date.now();
    const res = await fetch(
      `https://avatars.dicebear.com/api/avataaars/male/${
        Math.random() * 2
      }.svg?cache=${cacheBuster}`
    );
    const data = await res.url;
    setAvatarUrl(data);
  }

  return (
    <RemoveScroll>
      <Tabs.Root
        className="TabsRoot"
        defaultValue={location.pathname.slice(1) || "one"}
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
