import { useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { supabase } from "../Supabase/Supabaseconfig";
import toast, { Toaster } from "react-hot-toast";

function Upvotebutton({ feedbackId, userId, upvotes }) {
  const [localUpvotes, setLocalUpvotes] = useState(upvotes);
  const [isUpvoting, setIsUpvoting] = useState(false);
  const unAuthenticatedError = () => toast.error("Please sign in to upvote!");
  const upvoteSuccess = () => toast.success("feedback upvoted successfully!");
  const removeUpvote = () => toast("You have removed the upvote!")
  const isUpvotedByUser = !!localUpvotes.find(
    (upvote) => upvote.user_id === userId
  );

  function toggleUpvotes() {
    if (isUpvoting) return;
    setIsUpvoting(true);
    if (isUpvotedByUser) {
      supabase.from("upvotes")
      .delete()
      .eq('feedback_id', feedbackId)
      .eq('user_id', userId)
      .then((result) => {
        console.log(result)
        setLocalUpvotes((prevUpvotes) =>
        prevUpvotes.filter(
          (upvote) =>
            upvote.feedback_id !== feedbackId || upvote.user_id !== userId,
        )
      );
      setIsUpvoting(false);
      removeUpvote();
      })
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
        className={`bg-blue-50 px-4 py-1 md:px-2 md:py-2 rounded-md flex flex-row gap-2 md:flex-col items-center ${
          isUpvotedByUser && "bg-blue-600 text-white"
        }`}
      >
        <AiOutlineArrowUp color={`${isUpvotedByUser ? "red" : "black"}`} size={14} />
        <span className="text-sm font-bold">{localUpvotes.length}</span>
      </button>
      <Toaster />
    </div>
  );
}

export default Upvotebutton;
