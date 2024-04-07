import { connect } from "react-redux";
import { updateFilter } from "../../Redux/Filter/action";

interface FiltercardProps {
  updateFilter: typeof updateFilter;
  currentFilter: string;
}

function Filtercard({ updateFilter, currentFilter }: FiltercardProps) {
  const tags = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];

  return (
    <div className="hidden bg-white w-[280px] h-[180px] md:h-[200px] 2xl:h-[200px] rounded-md md:flex flex-wrap p-4 items-center gap-x-2 ">
      {tags.map((tag, index) => {
        return (
          <button
            key={index}
            className={`bg-blue-50 py-2 px-4 text-blue-600 rounded-md block transition-[background,color] duration-[0.3s] ${
              currentFilter === tag ? "bg-blue-700 text-white" : ""
            }`}
            onClick={(e) => {
              const event = e.target as HTMLElement;
              if (event.textContent === null) {
                throw new Error("event is null");
              }
              updateFilter(event.textContent);
            }}
          >
            {tag}
          </button>
        );
      })}
    </div>
  );
}

function mapStateToProps(state: { filter: string }) {
  return {
    currentFilter: state.filter,
  };
}

const mapDispatchToProps = {
  updateFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filtercard);
