import { Menu, Transition } from "@headlessui/react";
import { connect } from "react-redux";
import { updateOptions } from "../Store/Sort/action";
import { Fragment, useEffect, useRef, useState } from "react";
import { ChevronDown } from "react-feather";

function SelectFilter({ initialOptions, updateOptions }) {
  const feedbackFilter = [
    "Most Upvotes",
    "Least Upvotes",
    // "Most Comments",
    // "Least Comments",
  ];

  return (
    <div>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            {initialOptions}
            <ChevronDown
              className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute md:right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              {feedbackFilter.map((filter) => {
                return (
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={(e) => {
                          updateOptions(e.target.textContent);
                        }}
                        className={`${
                          active ? "bg-violet-500 text-white" : "text-gray-900"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        {filter}
                      </button>
                    )}
                  </Menu.Item>
                );
              })}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    initialOptions: state.sort,
  };
}

const mapDispatchToProps = {
  updateOptions,
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectFilter);
