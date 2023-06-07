import Comment from "./Comment";

function CommentList({ feedbackComments, commentListRef }) {
  console.log(commentListRef);
  const latestComments = feedbackComments.slice().reverse();

  return (
    <div className="bg-white mt-8 rounded-lg p-4" ref={commentListRef}>
      <span className="font-bold text-gray-600">{`${feedbackComments.length} ${
        feedbackComments.length > 1 ? "comments" : "comment"
      }`}</span>
      {latestComments.map((feedback) => {
        return (
          <Comment
            key={feedback.id}
            avatar={feedback.authorAvatar}
            name={feedback.authorName}
            email={feedback.authorEmail}
            comment={feedback.comment}
          />
        );
      })}
    </div>
  );
}

export default CommentList;
