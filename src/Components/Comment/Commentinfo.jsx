function Commentinfo({
  avatarUrl,
  name,
  feedbackDate,
  feedbackTitle,
  feedbackDetail,
  category,
}) {
  return (
    <div>
      <div className="flex flex-col">
        <div className="flex gap-x-2">
          <img
            className="h-[40px] w-[40px] rounded-full object-cover"
            src={avatarUrl}
            alt="profile"
          />
          <div>
            <p className="font-medium text-base">{name}</p>
            <p className="text-sm text-blue-500">{feedbackDate}</p>
          </div>
        </div>
        <div className="mt-2">
          <p className="font-bold">
            {feedbackTitle.length > 50
              ? feedbackTitle.substring(0, 50) + "..."
              : feedbackTitle}{" "}
          </p>
          <p>
            {feedbackDetail.length > 70
              ? feedbackDetail.substring(0, 60) + "...."
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
