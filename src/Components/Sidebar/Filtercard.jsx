import { useContext, useState } from "react";
import { FilterContext } from "../../App";

function Filtercard() {
  const tags = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];
  const { setSelectedTag } = useContext(FilterContext);
  const [currIndex, setCurrIndex] = useState(0);

  return (
    <div className="bg-white w-[280px] h-[180px] 2xl:h-[200px] rounded-md flex flex-wrap p-4 items-center gap-x-2">
      {tags.map((tags, index) => {
        return (
          <button
            key={index}
            className={`bg-blue-50 py-2 px-4 text-blue-600 rounded-md block transition-[background,color] duration-[0.3s] ${
              currIndex === index ? "bg-blue-700 text-white" : ""
            }`}
            onClick={(e) => {
              setSelectedTag(e.target.textContent), setCurrIndex(index);
            }}
          >
            {tags}
          </button>
        );
      })}
    </div>
  );
}

export default Filtercard;
