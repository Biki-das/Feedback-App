import SelectFilter from "./SelectFilter";
import { AiOutlineBulb, AiOutlinePlus } from "react-icons/ai";

function FeedbackAction({ feedback, selectedItem, setSelectedItem }) {
  return (
    <div className="w-full bg-[#373F68] justify-around h-[70px] flex items-center rounded-lg">
      <div className="flex p-2  gap-x-9">
        <div className="flex">
          <AiOutlineBulb color="white" size={28} />
          <p className="text-white font-bold text-lg">{feedback} Suggestions</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-white">Sort by:</p>
          <SelectFilter
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
          />
        </div>
      </div>
      <div className="flex bg-purple-600 text-white items-center font-bold w-[150px] h-[38px] justify-center rounded-md cursor-pointer hover:bg-purple-400 transition-[background] duration-[0.3s]">
        <AiOutlinePlus />
        <button>Add Feedback</button>
      </div>
    </div>
  );
}

export default FeedbackAction;
