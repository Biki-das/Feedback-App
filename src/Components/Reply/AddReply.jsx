import { useState, useRef, useEffect } from "react";

function AddReply({ toggleReplyBox }) {
  const [reply, setReply] = useState("");
  const textRef = useRef(null);
  useEffect(() => {
    textRef.current.focus();
  }, []);

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
      <div className="flex gap-x-4 py-2">
        <button className="text-sm bg-purple-500 text-white font-medium h-[40px] w-[80px] rounded-md">
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
  );
}

export default AddReply;
