import { MessageCircle } from "react-feather";

function CommentInfo({ comments }) {
  return (
    <div className="flex items-end md:items-center ml-2">
      <div className="flex items-center gap-x-1">
        <MessageCircle fill="#CDD2EE" stroke="white" />
        <span className="font-bold text-gray-600">{comments.length}</span>
      </div>
    </div>
  );
}

export default CommentInfo;
