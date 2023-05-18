import SelectFilter from "./SelectFilter";
import { AiOutlineBulb, AiOutlinePlus } from "react-icons/ai";
import { supabase } from "../Supabase/Supabaseconfig";
import { v4 as uuidv4 } from "uuid";
import { DateStamp } from "../Utils/DateUtil";
import { useNavigate } from "react-router-dom";

function FeedbackAction({ feedback }) {
  const navigate = useNavigate();
  async function createFeedbackTable() {
    const { data, error } = await supabase.from("feedback").insert([
      {
        id: uuidv4(),
        title: "Iphone is not connecting to apple pay",
        description: "Iphone has a new issue with apple pay",
        category: "bug",
        creation_time: DateStamp(new Date()),
        username: "Robert",
        user_avatar:
          "https://avatars.dicebear.com/api/avataaars/male/0.8480403676746042.svg?cache=1683390308856",
      },
    ]);

    if (error) {
      console.log(error);
      return null;
    }

    return data;
  }

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
