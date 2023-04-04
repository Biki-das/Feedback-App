import Upvotebutton from "./Upvotebutton";
import Commentinfo from "./Commentinfo";
import Commentbutton from "./Commentbutton";

function Comment({ feedback }) {
  return (
    <li className="list-none bg-white h-[180px] rounded-md mt-5 flex justify-between p-4">
      <div className="flex w-full gap-x-10">
        <Upvotebutton votes={feedback.commentVotes} />
        <Commentinfo
          avatarUrl={feedback.imageUrl}
          name={feedback.name}
          feedbackDate={feedback.timestamp}
          feedbackTitle={feedback.feedbacktitle}
          feedbackDetail={feedback.feedbackdetail}
          category={feedback.category}
        />
      </div>
      <Commentbutton comments={feedback.comments.length} />
    </li>
  );
}

export default Comment;
