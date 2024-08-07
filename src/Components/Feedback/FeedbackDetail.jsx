import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { supabase } from "../../Supabase/Supabaseconfig";
import { MdOutlineArrowBackIos } from "react-icons/md";
import Feedbackinfo from "./Feedbackinfo";
import UpvoteButtonContainer from "./UpvoteButtonContainer";
import { Loader } from "../Utils/Loader";
import { connect } from "react-redux";
import { toast } from "react-hot-toast";
import ComposeComment from "../Comment/ComposeComment";

function FeedbackDetail({ currentUser }) {
  const [feedbackDetail, setFeedbackDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    getFeedback();
    async function getFeedback() {
      let { data } = await supabase
        .from(`feedback`)
        .select("*, upvotes(*), comments(*)")
        .eq("id", id)
        .limit(1);
      setFeedbackDetail(data[0]);
      setLoading(false);
    }
  }, []);
  return (
    <main className="w-[90%] lg:w-[40%] mx-auto">
      <div className="flex justify-between items-center mt-8">
        <button
          className="flex items-center gap-x-4 text-gray-600 font-bold"
          onClick={() => {
            navigate(-1);
            toast.remove();
          }}
        >
          <MdOutlineArrowBackIos color="blue" />
          <span>Go back</span>
        </button>
        {feedbackDetail?.user_id === currentUser.user?.id && (
          <Link to={`/feedback/edit/${id}`}>
            <button className="disabled:opacity-70 bg-purple-600 text-white items-center font-bold p-2 w-[150px] h-[40px] justify-center rounded-md cursor-pointer hover:bg-purple-400 transition-[background] duration-[0.3s] text-sm">
              Edit Feedback
            </button>
          </Link>
        )}
      </div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="bg-white rounded-lg mx-auto mt-8 relative p-4 flex justify-center items-center min-h-[250px]">
            <div className="flex flex-col md:flex-row md:w-full gap-x-6">
              {feedbackDetail && (
                <UpvoteButtonContainer
                  feedbackId={id}
                  userId={currentUser.user?.id}
                  upvotes={feedbackDetail.upvotes}
                />
              )}

              {feedbackDetail && (
                <Feedbackinfo
                  avatarUrl={feedbackDetail.user_avatar}
                  name={feedbackDetail.username}
                  feedbackDate={feedbackDetail.creation_time}
                  feedbackTitle={feedbackDetail.title}
                  feedbackDetail={feedbackDetail.description}
                  category={feedbackDetail.category}
                  isDetailPage={true}
                />
              )}
            </div>
          </div>
          <ComposeComment
            feedbackId={id}
            feedbackComments={feedbackDetail.comments}
          />
        </>
      )}
    </main>
  );
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
  };
}

export default connect(mapStateToProps)(FeedbackDetail);
