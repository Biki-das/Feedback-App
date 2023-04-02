function SideBarCard() {
  return (
    <div className="bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-yellow-500 via-purple-500 to-blue w-[280px] h-[150px] 2xl:h-[200px] rounded-lg relative">
      <h1 className="text-white font-bold text-2xl absolute bottom-12 left-6">
        Apple
      </h1>
      <p className="text-white absolute bottom-6 left-6">Feedback Board</p>
    </div>
  );
}

function FilterTags() {
  const tags = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];
  return (
    <div className="bg-white w-[280px] h-[180px] 2xl:h-[200px] rounded-md flex flex-wrap p-4 items-center gap-x-2">
      {tags.map((tags) => {
        return (
          <button className="bg-blue-50 py-2 px-4 text-blue-600 rounded-md block focus:bg-blue-700 focus:text-white transition-[background,color] duration-[0.3s]">
            {tags}
          </button>
        );
      })}
    </div>
  );
}

function RoadmapCard() {
  const types = ["Planned", "In Progress", "Live"];
  return (
    <div className="bg-white w-[280px] h-[150px] 2xl:h-[200px] rounded-md p-4 items-center gap-x-2 flex flex-col justify-between">
      <div className="flex justify-between w-full">
        <p className="text-lg font-bold">Roadmap</p>
        <a href="/">
          <p className="text-blue-500">view</p>
        </a>
      </div>

      <div className="flex w-full justify-between">
        <div className="flex items-center gap-x-2">
          <div className="h-[8px] w-[8px] bg-orange-400 rounded-full"></div>
          <p>Planned</p>
        </div>
        <p className="font-bold">12</p>
      </div>

      <div className="flex w-full justify-between">
        <div className="flex items-center gap-x-2">
          <div className="h-[8px] w-[8px] bg-purple-400 rounded-full"></div>
          <p>In Progress</p>
        </div>
        <p className="font-bold">12</p>
      </div>

      <div className="flex w-full justify-between">
        <div className="flex items-center gap-x-2">
          <div className="h-[8px] w-[8px] bg-cyan-400 rounded-full"></div>
          <p>Live</p>
        </div>
        <p className="font-bold">12</p>
      </div>
    </div>
  );
}

function SideBar() {
  return (
    <div className="w-[30%] flex-1 flex flex-col gap-y-5 overflow:hidden fixed my-auto">
      <SideBarCard />
      <FilterTags />
      <RoadmapCard />
    </div>
  );
}

export default SideBar;
