import { useEffect, useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import FeedbackAction from "./FeedbackAction";
import Comment from "./Comment/Comment";
import { actions } from "./Actions/SortActions";
import { FilterActions } from "./Actions/FilterActions";
import { useContext } from "react";
import { FilterContext } from "../App";

function Feedback() {
  const [feedbacks, setFeedback] = useState([]);
  const [selectedItem, setSelectedItem] = useState("Most Upvotes");
  const [parent, enableAnimations] = useAutoAnimate();
  const { selectedTag } = useContext(FilterContext);

  useEffect(() => {
    getFeedback();
  }, []);

  async function getFeedback() {
    const res = await fetch("./src/Data.json");
    const data = await res.json();
    setFeedback(data);
  }

  return (
    <div className="lg:absolute lg:w-8/12 lg:right-0 mt-8 lg:mt-auto animate-slideLeft">
      <FeedbackAction
        feedback={feedbacks.length}
        comment={feedbacks.comments}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />
      <ul ref={parent}>
        {feedbacks
          .filter(FilterActions[selectedTag])
          .sort(actions[selectedItem])
          .map((feedback) => {
            return <Comment feedback={feedback} key={feedback.id} />;
          })}
      </ul>
    </div>
  );
}

export default Feedback;
