import { AiOutlineArrowUp } from "react-icons/ai";

function Upvotebutton({ votes }) {
  return (
    <div>
      <button className="bg-blue-50 px-2 py-2 rounded-md">
        <AiOutlineArrowUp color="blue" size={14} />
        <span className="text-small font-bold">{votes}</span>
      </button>
    </div>
  );
}

export default Upvotebutton;
