import { MessageCircle } from "react-feather";

function CommentInfo({ comments }) {
  return (
    <div className="flex items-end md:items-center">
      <a className="flex items-center gap-x-2" href="/">
        <MessageCircle stroke="#CDD3EF" />
        <span className="font-bold">{comments.length}</span>
      </a>
    </div>
  );
}

export default CommentInfo;
