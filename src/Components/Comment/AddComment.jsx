import { useState } from "react";

function AddComment({ maxChars }) {
  const [comment, setComment] = useState("");
  const charsRemaining = maxChars - comment.length;

  function getCharColor(charsRemaining) {
    if (charsRemaining < 0) {
      return `text-red-600`;
    } else if (charsRemaining < 15) {
      return `text-orange-400`;
    } else {
      return `text-black`;
    }
  }

  return (
    <div className="bg-white mt-8 min-h-[250px] rounded-lg flex flex-col justify-center">
      <form className="h-[90%] w-[90%] mx-auto">
        <label
          htmlFor="comment"
          className="text-gray-600 font-bold text-lg mt-4"
        >
          Add Comment
        </label>
        <textarea
          required
          rows={3}
          className="bg-[#F7F8FD] mt-4 focus:outline-blue-300 w-full p-2 rounded-md"
          id="comment"
          onChange={(e) => {
            setComment(e.target.value);
          }}
        />
      </form>
      <div className="w-[90%] mx-auto mt-4 flex justify-between">
        <p
          className={`${getCharColor(
            charsRemaining
          )} transition-[color] duration-[0.3s]`}
        >
          {charsRemaining} Characters left
        </p>
        <button>Add Comment</button>
      </div>
    </div>
  );
}

export default AddComment;
