import { Link } from "react-router-dom";

function RoadmapCard() {
  return (
    <div className="bg-white w-[280px] h-[150px] 2xl:h-[200px] rounded-md p-4 items-center gap-x-2 flex flex-col justify-between">
      <div className="flex justify-between w-full">
        <p className="text-lg font-bold">Roadmap</p>
        <Link to="/roadmap">
          <p className="text-blue-500">view</p>
        </Link>
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

export default RoadmapCard;
