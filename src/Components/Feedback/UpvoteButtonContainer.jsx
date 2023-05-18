import { Toaster } from "react-hot-toast";
import Upvotebutton from "./Upvotebutton";

function UpvoteButtonContainer({ feedbackId, userId, upvotes }) {
  return (
    <>
      <Toaster />
      <Upvotebutton feedbackId={feedbackId} userId={userId} upvotes={upvotes} />
    </>
  );
}

export default UpvoteButtonContainer;
