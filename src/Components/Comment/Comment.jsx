function Comment({ avatar, name, email, comment }) {
  return (
    <div className="bg-white flex py-4 mt-6 relative border-b-[0.8px] border-gray-30 items-start">
      <div className="flex gap-x-6">
        <img src={avatar} className="h-[30px] w-[30px] rounded-full" />
        <div>
          <div>
            <p className="font-bold text-gray-600">{name}</p>
            <p className="text-gray-600">{email}</p>
          </div>
          <p className="text-gray-600 mt-6">{comment}</p>
        </div>
      </div>
      <button className="text-blue-600 font-bold cursor-pointer">reply</button>
    </div>
  );
}

export default Comment;
