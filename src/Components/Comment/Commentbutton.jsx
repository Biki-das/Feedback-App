import { FaRegComment } from "react-icons/fa";

function Commentbutton({ comments }) {
  return (
    <div className="flex items-center">
      <a className="flex items-center gap-x-2" href="/">
        <FaRegComment />
        <span>{comments}</span>
      </a>
    </div>
  );
}

export default Commentbutton;
