import SelectFilter from "./SelectFilter";
import { AiOutlineBulb, AiOutlinePlus } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function FeedbackAction({ feedback }) {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-[#373F68] justify-around h-[70px] flex items-center md:rounded-lg sticky top-0 md:relative z-20">
      <div className="flex p-2 gap-x-9">
        <div className="hidden md:flex">
          <AiOutlineBulb color="white" size={28} />
          <p className="text-white font-bold text-lg">{feedback} Suggestions</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-white text-sm">Sort by:</p>
          <SelectFilter />
        </div>
      </div>
      <button
        onClick={() => {
          navigate("/createfeedback");
        }}
        className="flex bg-purple-600 text-white items-center font-bold p-2 md:w-[150px] h-[38px] justify-center rounded-md cursor-pointer hover:bg-purple-400 transition-[background] duration-[0.3s] text-sm"
      >
        <AiOutlinePlus />
        Add Feedback
      </button>
    </div>
  );
}

export default FeedbackAction;
