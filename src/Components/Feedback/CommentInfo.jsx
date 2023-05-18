import { FaRegComment } from "react-icons/fa";

function CommentInfo({ comments }) {
  return (
    <div className="flex items-end md:items-center">
      <a className="flex items-center gap-x-2" href="/">
        <FaRegComment />
        <span>{comments}</span>
      </a>
    </div>
  );
}

export default CommentInfo;
