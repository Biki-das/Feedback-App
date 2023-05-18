import { formatFeedbackDate } from "../Utils/DateUtil";

function Commentinfo({
  avatarUrl,
  name,
  feedbackDate,
  feedbackTitle,
  feedbackDetail,
  category,
}) {
  return (
    <div className="order-1 md:order-2">
      <div className="flex flex-col">
        <div className="flex gap-x-2">
          <img
            className="h-[30px] w-[30px] rounded-full object-cover"
            src={avatarUrl}
            alt="profile"
          />
          <div>
            <p className="font-medium text-sm">{name}</p>
            {}
            <p className="text-sm text-blue-500">
              {formatFeedbackDate(feedbackDate)}
            </p>
          </div>
        </div>
        <div className="mt-2">
          <p className="font-bold text-base">
            {feedbackTitle.length > 60
              ? feedbackTitle.substring(0, 50) + "..."
              : feedbackTitle}{" "}
          </p>
          <p className="text-sm">
            {feedbackDetail.length > 180
              ? feedbackDetail.substring(0, 150) + "...."
              : feedbackDetail}
          </p>
        </div>
        <div className="bg-blue-300 rounded-md py-1 px-4 h-[25px] w-fit flex items-center mt-2">
          <p className="text-sm text-white">{category}</p>
        </div>
      </div>
    </div>
  );
}

export default Commentinfo;
