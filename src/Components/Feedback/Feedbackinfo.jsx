import { formatFeedbackDate } from "../Utils/DateUtil";
import { Link } from "react-router-dom";

function Feedbackinfo({
  id,
  avatarUrl,
  name,
  feedbackDate,
  feedbackTitle,
  feedbackDetail,
  category,
  isDetailPage = false,
}) {
  return isDetailPage ? (
    <div className="order-1 md:order-2 list-none">
      <div className="flex flex-col">
        <div className="flex gap-x-2 items-center">
          <img
            className="md:h-[30px] md:w-[30px] h-[40px] w-[40px] rounded-full object-cover"
            src={avatarUrl}
            alt="profile"
          />
          <div>
            <p className="font-medium text-sm">{name}</p>
            {}
            <p className="text-sm text-gray-600">
              {formatFeedbackDate(feedbackDate)}
            </p>
          </div>
        </div>
        <div className="mt-2">
          <p className="font-bold text-base text-gray-600">
            {isDetailPage
              ? feedbackTitle
              : feedbackTitle.length > 60
              ? feedbackTitle.substring(0, 50) + "..."
              : feedbackTitle}
          </p>
          <p className="text-sm text-gray-600">
            {isDetailPage
              ? feedbackDetail
              : feedbackDetail.length > 180
              ? feedbackDetail.substring(0, 150) + "...."
              : feedbackDetail}
          </p>
        </div>
        <div className="bg-blue-50 rounded-md py-1 px-4 h-[25px] w-fit flex items-center mt-2">
          <p className="text-sm text-blue-600 font-bold">{category}</p>
        </div>
      </div>
    </div>
  ) : (
    <Link to={`/feedback/${id}`} className="order-1 md:order-2">
      <div className="flex flex-col list-none">
        <div className="flex gap-x-2">
          <img
            className="h-[30px] w-[30px] rounded-full object-cover"
            src={avatarUrl}
            alt="profile"
          />
          <div>
            <p className="font-medium text-sm">{name}</p>
            {}
            <p className="text-sm text-grat-600">
              {formatFeedbackDate(feedbackDate)}
            </p>
          </div>
        </div>
        <div className="mt-2">
          <p className="font-bold text-base text-gray-600">
            {isDetailPage
              ? feedbackTitle
              : feedbackTitle.length > 60
              ? feedbackTitle.substring(0, 50) + "..."
              : feedbackTitle}
          </p>
          <p className="text-sm text-gray-600">
            {isDetailPage
              ? feedbackDetail
              : feedbackDetail.length > 180
              ? feedbackDetail.substring(0, 150) + "...."
              : feedbackDetail}
          </p>
        </div>
        <div className="bg-blue-50  rounded-md py-1 px-4 h-[25px] w-fit flex items-center mt-2">
          <p className="text-sm text-blue-600 font-bold">{category}</p>
        </div>
      </div>
    </Link>
  );
}

export default Feedbackinfo;
