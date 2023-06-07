import { useState, useEffect, useRef } from "react";
import { supabase } from "../Supabase/Supabaseconfig";
import { useSelector } from "react-redux";
import CommentList from "./Commentlist";
import toast from "react-hot-toast";

function AddComment({ maxChars, feedbackId }) {
  useEffect(() => {
    getComments();
  }, []);

  const commentListRef = useRef(null);
  const [comment, setComment] = useState("");
  const [feedbackComments, setFeedbackComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const charsRemaining = maxChars - comment.length;
  const user = useSelector((state) => {
    return state.currentUser.user;
  });

  const commentNotify = () => toast.success("comment Added successfully");

  function getCharColor(charsRemaining) {
    if (charsRemaining < 0) {
      return `text-red-600`;
    } else if (charsRemaining < 15) {
      return `text-orange-400`;
    } else {
      return `text-gray-500`;
    }
  }

  function postComment() {
    setLoading(true);
    supabase
      .from("comments")
      .insert({
        comment: comment,
        authorEmail: user.email,
        authorAvatar: user.userAvatar,
        authorName: user.userName,
        user_id: user.id,
        feedback_id: feedbackId,
      })
      .then(() => {
        setLoading(false);
        commentNotify();
        getComments();
        commentListRef.current.scrollIntoView({ behavior: "smooth" });
      });
  }

  function getComments() {
    supabase
      .from("comments")
      .select("*")
      .eq("feedback_id", feedbackId)
      .then((result) => {
        if (result.error) {
          console.error("Error fetching comments:", result.error);
        } else {
          setFeedbackComments(result.data);
        }
      });
  }

  function handleFormSubmit(e) {
    if (comment.trim() === "") {
      return; // Ignore empty comments
    }

    postComment();
    setComment(""); // Clear the comment textarea
  }

  function Loader() {
    return (
      <div className="border-gray-300 h-8 w-8 animate-spin rounded-full border-4 border-t-white mx-auto" />
    );
  }

  return (
    <>
      <div className="bg-white mt-8 min-h-[250px] rounded-lg flex flex-col justify-center">
        <form
          type="sumbit"
          id="comment"
          onSubmit={handleFormSubmit}
          className="w-[90%] mx-auto flex flex-col"
        >
          <label
            htmlFor="comment"
            className="text-gray-600 font-bold text-lg mt-4"
            style={{ alignSelf: "start" }}
          >
            Add Comment
          </label>
          <textarea
            required
            disabled={!user}
            rows={3}
            className="bg-[#F7F8FD] mt-4 focus:outline-blue-300 w-full p-2 rounded-md"
            id="comment"
            value={comment}
            onChange={(e) => {
              setComment(e.target.value);
            }}
          />
        </form>
        <div className="w-[90%] mx-auto mt-4 flex justify-between py-1 items-center">
          <p
            className={`${getCharColor(
              charsRemaining
            )} transition-[color] duration-[0.3s]`}
          >
            {charsRemaining} Characters left
          </p>
          <button
            disabled={charsRemaining < 0 || !user || comment.length === 0}
            onClick={() => {
              user && handleFormSubmit();
            }}
            className="bg-purple-600 text-white w-[150px] h-[50px] rounded-md text-sm font-bold disabled:opacity-70 transition-[opacity] duration-[0.3s]"
          >
            {loading ? <Loader /> : user ? "Add comment" : "Login to comment"}
          </button>
        </div>
      </div>
      <CommentList
        feedbackComments={feedbackComments}
        commentListRef={commentListRef}
      />
    </>
  );
}

export default AddComment;
