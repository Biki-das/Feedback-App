import React from "react";
import { RemoveScroll } from "react-remove-scroll";
import { connect } from "react-redux";
import { updateFilter } from "../../Redux/Filter/action";
import { Link } from "react-router-dom";

function Mobilesidebar({ updateFilter, hideSidebar, currentFilter }) {
  const tags = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];

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
                    updateFilter(e.target.textContent), hideSidebar(false);
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
                <p className="font-bold">12</p>
              </div>

              <div className="flex w-full justify-between mt-2">
                <div className="flex items-center gap-x-2">
                  <div className="h-[8px] w-[8px] bg-purple-400 rounded-full"></div>
                  <p>In Progress</p>
                </div>
                <p className="font-bold">12</p>
              </div>

              <div className="flex w-full justify-between mt-2">
                <div className="flex items-center gap-x-2">
                  <div className="h-[8px] w-[8px] bg-cyan-400 rounded-full"></div>
                  <p>Live</p>
                </div>
                <p className="font-bold">12</p>
              </div>
            </div>
          </div>
        </RemoveScroll>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    currentFilter: state.filter,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateFilter: (filter) => dispatch(updateFilter(filter)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Mobilesidebar);
