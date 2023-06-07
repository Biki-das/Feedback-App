import { useState } from "react";
import AddReply from "../Reply/AddReply";

function Comment({ avatar, name, email, comment }) {
  const [isReplyBoxVisible, setIsReplyBoxVisible] = useState(false);

  const toggleReplyBox = () => {
    setIsReplyBoxVisible(!isReplyBoxVisible);
  };

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
        {!isReplyBoxVisible && (
          <button
            className="text-blue-600 font-bold cursor-pointer"
            onClick={toggleReplyBox}
          >
            reply
          </button>
        )}
      </div>
      {isReplyBoxVisible && <AddReply toggleReplyBox={toggleReplyBox} />}
    </div>
  );
}

export default Comment;
