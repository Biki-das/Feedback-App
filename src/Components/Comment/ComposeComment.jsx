import Comment from "./AddComment";

function ComposeComment({ feedbackId, feedbackComments }) {
  return (
    <Comment
      maxChars={250}
      feedbackId={feedbackId}
      feedbackComments={feedbackComments}
    />
  );
}

export default ComposeComment;
