import AddComment from "./AddComment";

function ComposeComment({ feedbackId, feedbackComments }) {
  return (
    <AddComment
      maxChars={250}
      feedbackId={feedbackId}
      feedbackComments={feedbackComments}
    />
  );
}

export default ComposeComment;
