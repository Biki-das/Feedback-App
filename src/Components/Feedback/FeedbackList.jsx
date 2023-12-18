import { useEffect, useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import FeedbackAction from "./FeedbackAction";
import Feedback from "./Feedback";
import { actions } from "../Utils/SortActions";
import { FilterActions } from "../Utils/FilterActions";
import { connect } from "react-redux";
import { supabase } from "../../Supabase/Supabaseconfig";
import { Loader } from "../Utils/Loader";

function FeedbackList({ options, filters, currentUser }) {
  const [feedbacks, setFeedback] = useState([]);
  const [loading, setLoading] = useState(true);
  const [parent] = useAutoAnimate();

  useEffect(() => {
    getFeedback();
    async function getFeedback() {
      let { data } = await supabase
        .from("feedback")
        .select("*, upvotes(*),comments(*)");
      setLoading(false);
      setFeedback(data);
    }
  }, []);

  useEffect(() => {
    document.title = `${

      feedbacks.filter(FilterActions[filters]).sort(actions[options]).length
    } Suggestions`;
  }, [filters]);
      loading
        ? "Loading..." // or some default title while loading
        : feedbacks.filter(FilterActions[filters]).sort(actions[options]).length
    } Suggestions Feedback Board`;
  }, [loading, filters, options]);


  return (
    <div className="lg:absolute static lg:w-8/12 lg:right-0 md:mt-8 lg:mt-auto animate-slideright">
      <FeedbackAction
        feedback={feedbacks.filter(FilterActions[filters]).length}
      />
      {loading ? (
        <Loader />
      ) : (
        <ul ref={parent}>
          {feedbacks
            .filter(FilterActions[filters])
            .sort(actions[options])
            .map((feedback) => {
              return (
                <Feedback
                  feedback={feedback}
                  key={feedback.id}
                  userId={currentUser?.id}
                />
              );
            })}
        </ul>
      )}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    options: state.sort,
    filters: state.filter,
    currentUser: state.currentUser.user,
  };
}

export default connect(mapStateToProps)(FeedbackList);
