import { useState, useEffect } from "react";
import ComposeReply from "../Reply/ComposeReply";
import ReplyList from "../Reply/ReplyList";
import { supabase } from "../../Supabase/Supabaseconfig";

function Comment({ avatar, name, email, comment, commentId, user }) {
  const [isReplyBoxVisible, setIsReplyBoxVisible] = useState(false);
  const [replies, setReplies] = useState([]);

  const toggleReplyBox = () => {
    setIsReplyBoxVisible(!isReplyBoxVisible);
  };

  function getReplies() {
    supabase
      .from("replies")
      .select("*")
      .eq("comment_id", commentId)
      .then((result) => {
        if (result.error) {
          console.error("error fetching data");
        } else {
          setReplies(result.data);
        }
      });
  }

  useEffect(() => {
    getReplies();
  }, []);

  return (
    <div className="border-b-[0.8px] border-gray-30">
      <div className="bg-white flex py-4 mt-6 relative  items-start justify-between">
        <div className="flex gap-x-6">
          <img src={avatar} className="h-[30px] w-[30px] rounded-full" />
          <div>
            <div>
              <p className="font-bold text-gray-600">{name}</p>
              <p className="text-gray-600">{email}</p>
            </div>
            <p className="text-gray-600 mt-6">{comment}</p>
          </div>
        </div>
        {user && !isReplyBoxVisible && (
          <button
            className="text-blue-600 font-bold cursor-pointer"
            onClick={toggleReplyBox}
          >
            reply
          </button>
        )}
      </div>
      {isReplyBoxVisible && (
        <ComposeReply
          toggleReplyBox={toggleReplyBox}
          commentId={commentId}
          getReplies={getReplies}
        />
      )}
      {replies.length > 0 && <ReplyList replies={replies} />}
    </div>
  );
}

export default Comment;
