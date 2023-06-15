import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../../Supabase/Supabaseconfig";
import { StatusFilter } from "../Utils/FilterActions";

function RoadmapCard() {
  const [statusList, setStatusList] = useState([]);

  useEffect(() => {
    getFeedback();
    async function getFeedback() {
      let { data } = await supabase.from("feedback").select("status");
      setStatusList(data);
    }
  }, []);
  return (
    <div className="hidden bg-white w-[280px] h-[150px] md:h-[200px] 2xl:h-[200px] rounded-md p-4 items-center gap-x-2 md:flex flex-col justify-between">
      <div className="flex justify-between w-full items-center">
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
        <p className="font-bold">
          {statusList.filter(StatusFilter.Planned).length}
        </p>
      </div>

      <div className="flex w-full justify-between">
        <div className="flex items-center gap-x-2">
          <div className="h-[8px] w-[8px] bg-purple-400 rounded-full"></div>
          <p>In Progress</p>
        </div>
        <p className="font-bold">
          {statusList.filter(StatusFilter.InProgress).length}
        </p>
      </div>

      <div className="flex w-full justify-between">
        <div className="flex items-center gap-x-2">
          <div className="h-[8px] w-[8px] bg-cyan-400 rounded-full"></div>
          <p>Live</p>
        </div>
        <p className="font-bold">
          {statusList.filter(StatusFilter.Live).length}
        </p>
      </div>
    </div>
  );
}

export default RoadmapCard;
