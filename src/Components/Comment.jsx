import { AiOutlineArrowUp, AiOutlineComment } from "react-icons/ai";

function Upvotebutton() {
  return (
    <div>
      <button className="bg-blue-50 px-2 py-2 rounded-md">
        <AiOutlineArrowUp color="blue" size={14} />
        <span className="text-small font-bold">80</span>
      </button>
    </div>
  );
}

function Commentinfo() {
  return (
    <div>
      <div className="flex flex-col">
        <div className="flex">
          <img
            className="h-[40px] w-[40px] rounded-full object-cover"
            src="https://avatars.dicebear.com/api/avataaars/573cd8a3-c38e-4673-afd2-d9ac806ebabb.svg"
          />
          <div>
            <p className="font-medium text-base">John doe</p>
            <p className="text-sm text-blue-500">14 Sep, 2021</p>
          </div>
        </div>
        <div className="mt-2">
          <p className="font-bold">
            Give us a roadmap to something, idk, buying a razer{" "}
          </p>
          <p>Help us choose the right razer for us</p>
        </div>
        <div className="bg-blue-50 w-[60px]">
          <p className="text-center text-blue-600 font-medium text-sm">
            Feature
          </p>
        </div>
      </div>
    </div>
  );
}

function Commentbutton() {
  return (
    <div className="flex items-center">
      <a href="/">
        <AiOutlineComment />
        <span>40</span>
      </a>
    </div>
  );
}

function Comment() {
  return (
    <li className="list-none bg-white h-[180px] rounded-md mt-5 flex justify-between p-4">
      <div className="flex w-full gap-x-10">
        <Upvotebutton />
        <Commentinfo />
      </div>
      <Commentbutton />
    </li>
  );
}

export default Comment;
