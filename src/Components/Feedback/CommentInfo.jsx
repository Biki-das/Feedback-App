import { MessageCircle } from "react-feather";

function CommentInfo({ comments }) {
  return (
    <div className="flex items-end md:items-center ml-2">
      <a className="flex items-center gap-x-1" href="/">
        <MessageCircle fill="#CDD2EE" stroke="white" />
        <span className="font-bold">{comments.length}</span>
      </a>
    </div>
  );
}

export default CommentInfo;
