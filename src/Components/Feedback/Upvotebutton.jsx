import { useState } from "react";
import { supabase } from "../../Supabase/Supabaseconfig";
import toast from "react-hot-toast";
import { ChevronUp } from "react-feather";

function Upvotebutton({ feedbackId, userId, upvotes }) {
  const [localUpvotes, setLocalUpvotes] = useState(upvotes);
  const [isUpvoting, setIsUpvoting] = useState(false);
  const unAuthenticatedError = () =>
    toast.error("Please sign in to upvote!", { duration: 1000 });
  const upvoteSuccess = () =>
    toast.success("feedback upvoted successfully!", { duration: 1000 });
  const removeUpvote = () =>
    toast("You have removed the upvote!", { duration: 1000 });
  const isUpvotedByUser = !!localUpvotes.find(
    (upvote) => upvote.user_id === userId
  );

  function toggleUpvotes() {
    if (isUpvoting) return;
    setIsUpvoting(true);
    if (isUpvotedByUser) {
      supabase
        .from("upvotes")
        .delete()
        .eq("feedback_id", feedbackId)
        .eq("user_id", userId)
        .then(() => {
          setLocalUpvotes((prevUpvotes) =>
            prevUpvotes.filter(
              (upvote) =>
                upvote.feedback_id !== feedbackId || upvote.user_id !== userId
            )
          );
          setIsUpvoting(false);
          removeUpvote();
        });
      return;
    }
    supabase
      .from("upvotes")
      .insert({
        feedback_id: feedbackId,
        user_id: userId,
      })
      .then(() => {
        setLocalUpvotes((prevUpvotes) => [
          ...prevUpvotes,
          { feedback_id: feedbackId, user_id: userId },
        ]);
        setIsUpvoting(false);
        upvoteSuccess();
      });
  }

  return (
    <div className="order-2 md:order-1 mt-2 md:mt-0">
      <button
        disabled={isUpvoting}
        onClick={() => {
          userId ? toggleUpvotes() : unAuthenticatedError();
        }}
        className={`bg-blue-50 h-[25px] w-[50px] md:h-[45px] md:w-[45px] rounded-md flex flex-row md:flex-col items-center justify-center gap-x-2`}
      >
        <ChevronUp color={`${isUpvotedByUser ? "red" : "blue"}`} size={14} />
        <span className="text-sm font-bold text-gray-600">
          {localUpvotes.length}
        </span>
      </button>
    </div>
  );
}

export default Upvotebutton;
