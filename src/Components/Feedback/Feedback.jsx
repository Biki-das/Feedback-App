import Feedbackinfo from "./Feedbackinfo";
import UpvotebuttonContainer from "./UpvoteButtonContainer";
import CommentInfo from "./CommentInfo";

function Feedback({ feedback, userId }) {
  return (
    <li className="list-none w-[90%] md:w-full mx-auto bg-white  rounded-md mt-5 flex justify-between p-4">
      <div className="flex flex-col md:flex-row md:w-full gap-x-10">
        <UpvotebuttonContainer
          feedbackId={feedback.id}
          userId={userId}
          upvotes={feedback.upvotes}
        />
        <Feedbackinfo
          id={feedback.id}
          avatarUrl={feedback.user_avatar}
          name={feedback.username}
          feedbackDate={feedback.creation_time}
          feedbackTitle={feedback.title}
          feedbackDetail={feedback.description}
          category={feedback.category}
        />
      </div>
      <CommentInfo comments={feedback.comments} />
    </li>
  );
}

export default Feedback;
