import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "../Supabase/Supabaseconfig";
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
        .select("*, upvotes(*)")
        .eq("id", id)
        .limit(1);
      setFeedbackDetail(data[0]);
      setLoading(false);
    }
  }, []);
  return (
    <main className="w-[90%] lg:w-[40%] mx-auto">
      <button
        className="flex items-center gap-x-4 text-gray-600 font-bold mt-8"
        onClick={() => {
          navigate(-1);
          toast.remove();
        }}
      >
        <MdOutlineArrowBackIos color="blue" />
        <span>Go back</span>
      </button>
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
          <ComposeComment />
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
