import Comment from "./Comment";

function CommentList({ feedbackComments }) {
  return (
    <div className="bg-white mt-8 rounded-lg p-4">
      <span className="font-bold">{`${feedbackComments.length} ${
        feedbackComments.length > 1 ? "comments" : "comment"
      }`}</span>
      {feedbackComments.map((feedback) => {
        return (
          <Comment
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
