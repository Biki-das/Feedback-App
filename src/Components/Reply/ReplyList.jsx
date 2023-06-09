import Reply from "./Reply";

function ReplyList({ replies }) {
  return replies.map(({ authorName, authorEmail, authorAvatar, reply }) => {
    return (
      <Reply
        authorName={authorName}
        authorEmail={authorEmail}
        authorAvatar={authorAvatar}
        reply={reply}
      />
    );
  });
}

export default ReplyList;
