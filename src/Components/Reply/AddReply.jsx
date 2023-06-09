import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { supabase } from "../../Supabase/Supabaseconfig";

function AddReply({ toggleReplyBox, commentId, maxChars, getReplies }) {
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState("");

  const user = useSelector((state) => {
    return state.currentUser.user;
  });
  const charsRemaining = maxChars - reply.length;
  const textRef = useRef(null);
  useEffect(() => {
    textRef.current.focus();
    getReplies();
  }, []);

  function getCharColor(charsRemaining) {
    if (charsRemaining < 0) {
      return `text-red-600`;
    } else if (charsRemaining < 15) {
      return `text-orange-400`;
    } else {
      return `text-gray-500`;
    }
  }

  function postReply() {
    setLoading(true);
    supabase
      .from("replies")
      .insert({
        reply: reply,
        authorEmail: user.email,
        authorAvatar: user.userAvatar,
        authorName: user.userName,
        comment_id: commentId,
      })
      .then((result) => {
        setLoading(false);
        toggleReplyBox();
        getReplies();
      });
  }

  function handleReplySubmit() {
    if (reply.trim() === "") {
      return;
    }
    postReply();
    setReply("");
  }

  return (
    <div className="bg-white min-h-[100px] rounded-lg flex flex-col justify-center">
      <form>
        <textarea
          ref={textRef}
          required
          rows={3}
          className="bg-[#F7F8FD] mt-4 focus:outline-blue-300 w-full p-2 rounded-md"
          id="comment"
          value={reply}
          onChange={(e) => {
            setReply(e.target.value);
          }}
        />
      </form>
      <div className="py-4">
        <p
          className={`${getCharColor(
            charsRemaining
          )} transition-[color] duration-[0.3s]`}
        >
          {charsRemaining} Characters left
        </p>
        <div className="flex gap-x-4 mt-2">
          <button
            onClick={() => {
              handleReplySubmit();
            }}
            className="text-sm bg-purple-500 text-white font-medium h-[40px] w-[80px] rounded-md"
          >
            Add reply
          </button>
          <button
            onClick={toggleReplyBox}
            className="text-sm bg-gray-500 font-medium h-[40px] w-[80px] rounded-md text-white"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddReply;
