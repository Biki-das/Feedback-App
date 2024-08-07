import Comment from "./Comment";

function CommentList({ feedbackComments, commentListRef, user }) {
  const latestComments = feedbackComments.slice().reverse();

  return (
    <div className="bg-white mt-8 rounded-lg p-4" ref={commentListRef}>
      <span className="font-bold text-gray-600">{`${feedbackComments.length} ${
        feedbackComments.length > 1 ? "comments" : "comment"
      }`}</span>
      {latestComments.map((feedbackComment) => {
        return (
          <Comment
            key={feedbackComment.id}
            commentId={feedbackComment.id}
            avatar={feedbackComment.authorAvatar}
            name={feedbackComment.authorName}
            email={feedbackComment.authorEmail}
            comment={feedbackComment.comment}
            user={user}
          />
        );
      })}
    </div>
  );
}

export default CommentList;
