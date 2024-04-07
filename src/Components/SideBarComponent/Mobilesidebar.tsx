import React, { useEffect, useState } from "react";
import { RemoveScroll } from "react-remove-scroll";
import { connect } from "react-redux";
import { updateFilter } from "../../Redux/Filter/action";
import { Link } from "react-router-dom";
import { supabase } from "../../Supabase/Supabaseconfig";
import { Dispatch } from "redux";

interface MobilesidebarProps {
  updateFilter: typeof updateFilter;
  hideSidebar: (value: boolean) => void;
  currentFilter: string;
}

function Mobilesidebar({
  updateFilter,
  hideSidebar,
  currentFilter,
}: MobilesidebarProps) {
  const tags = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];
  const [statusList, setStatusList] = useState<{ status: string }[] | null>(
    null
  );
  const plannedList = statusList?.filter(({ status }) => {
    return status === "Planned";
  });
  const inProgressList = statusList?.filter(({ status }) => {
    return status === "Inprogress";
  });

  const liveList = statusList?.filter(({ status }) => {
    return status === "Live";
  });

  useEffect(() => {
    getFeedback();
    async function getFeedback() {
      let { data } = await supabase.from("feedback").select("status");
      setStatusList(data);
    }
  }, []);

  return (
    <div className="bg-white w-full h-full absolute z-50 top-[70px] bg-opacity-50 md:hidden animate-slideright">
      <div className="bg-blue-50 h-full w-[70%] sm:w-[50%] absolute right-0">
        <RemoveScroll>
          <div className="bg-white w-[90%] mx-auto mt-4 h-[180px] rounded-md flex flex-wrap p-4 items-center gap-x-2 ">
            {tags.map((tags, index) => {
              return (
                <button
                  key={index}
                  className={`bg-blue-50 py-2 px-4 text-sm text-blue-600 rounded-md block transition-[background,color] duration-[0.3s] ${
                    currentFilter === tags ? "bg-blue-700 text-white" : ""
                  }`}
                  onClick={(e) => {
                    let value = e.target as HTMLElement;
                    if (value.textContent === null) {
                      throw new Error("event is null");
                    }
                    updateFilter(value.textContent), hideSidebar(false);
                  }}
                >
                  {tags}
                </button>
              );
            })}
          </div>
          <div className="bg-white w-[90%] mx-auto h-[180px] mt-2 rounded-md flex flex-wrap p-4 ">
            <div className="bg-white  rounded-md  justify-between  w-full">
              <div className="flex justify-between w-full">
                <p className="text-lg font-bold">Roadmap</p>
                <Link to="/roadmap">
                  <p className="text-blue-500">View</p>
                </Link>
              </div>

              <div className="flex w-full justify-between mt-8">
                <div className="flex items-center gap-x-2">
                  <div className="h-[8px] w-[8px] bg-orange-400 rounded-full"></div>
                  <p>Planned</p>
                </div>
                <p className="font-bold">{plannedList?.length}</p>
              </div>

              <div className="flex w-full justify-between mt-2">
                <div className="flex items-center gap-x-2">
                  <div className="h-[8px] w-[8px] bg-purple-400 rounded-full"></div>
                  <p>In Progress</p>
                </div>
                <p className="font-bold">{inProgressList?.length}</p>
              </div>

              <div className="flex w-full justify-between mt-2">
                <div className="flex items-center gap-x-2">
                  <div className="h-[8px] w-[8px] bg-cyan-400 rounded-full"></div>
                  <p>Live</p>
                </div>
                <p className="font-bold">{liveList?.length}</p>
              </div>
            </div>
          </div>
        </RemoveScroll>
      </div>
    </div>
  );
}

function mapStateToProps(state: { filter: string }) {
  return {
    currentFilter: state.filter,
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    updateFilter: (filter: string) => dispatch(updateFilter(filter)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Mobilesidebar);
