import AddReply from "./AddReply";

function ComposeReply({ toggleReplyBox, commentId, getReplies }) {
  return (
    <AddReply
      maxChars={250}
      toggleReplyBox={toggleReplyBox}
      commentId={commentId}
      getReplies={getReplies}
    />
  );
}

export default ComposeReply;
