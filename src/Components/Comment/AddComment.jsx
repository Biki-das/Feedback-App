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
      return `text-gray-500`;
    }
  }

  return (
    <div className="bg-white mt-8 min-h-[250px] rounded-lg flex flex-col justify-center">
      <form className="w-[90%] mx-auto flex flex-col">
        <label
          htmlFor="comment"
          className="text-gray-600 font-bold text-lg mt-4"
          style={{ alignSelf: "start" }} // Align label to the start (top) of the flex container
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
      <div className="w-[90%] mx-auto mt-4 flex justify-between py-1">
        <p
          className={`${getCharColor(
            charsRemaining
          )} transition-[color] duration-[0.3s]`}
        >
          {charsRemaining} Characters left
        </p>
        <button className="bg-purple-600 text-white p-2 rounded-md">
          Add Comment
        </button>
      </div>
    </div>
  );
}

export default AddComment;
