import SideBarCard from "./SideBarCard";
import RoadmapCard from "./Roadmapcard";
import Filtercard from "./Filtercard";

function SideBar() {
  return (
    <div className="w-full mx-auto lg:w-[30%] flex gap-x-6 lg:flex-col gap-y-5 lg:fixed lg:my-auto animate-slideright">
      <SideBarCard />
      <Filtercard />
      <RoadmapCard />
    </div>
  );
}

export default SideBar;
