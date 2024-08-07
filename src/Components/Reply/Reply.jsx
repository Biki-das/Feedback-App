function Reply({ authorName, authorEmail, authorAvatar, reply }) {
  return (
    <div className="border-l-[0.8px] border-gray-30 w-[90%] mx-auto mb-2">
      <div className="bg-white flex p-4 mt-6 relative  items-start justify-between">
        <div className="flex gap-x-6">
          <img src={authorAvatar} className="h-[30px] w-[30px] rounded-full" />
          <div>
            <div>
              <p className="font-bold text-gray-600">{authorName}</p>
              <p className="text-gray-600">{authorEmail}</p>
            </div>
            <p className="text-gray-600 mt-6">{reply}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reply;
