import { MdOutlineArrowBackIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { BsCheck } from "react-icons/bs";
import * as Select from "@radix-ui/react-select";
import { forwardRef, useState } from "react";
import { connect } from "react-redux";
import { supabase } from "../../Supabase/Supabaseconfig";
import { v4 as uuidv4 } from "uuid";
import { DateStamp } from "../Utils/DateUtil";

function FeedbackForm({ currentUser }) {
  const navigate = useNavigate();
  const categories = ["Feature", "UI", "UX", "Enhancement", "Bug"];
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedCategory, setSelectedCatergory] = useState("Feature");

  function FeedbackCategory() {
    return (
      <Select.Root
        value={selectedCategory}
        onValueChange={setSelectedCatergory}
      >
        <Select.Trigger className="SelectTrigger flex items-center w-full bg-[#F7F8FD] h-[50px] rounded-md px-2">
          <Select.Value placeholder={selectedCategory} />
        </Select.Trigger>
        <Select.Portal>
          <Select.Content
            onCloseAutoFocus={(e) => e.preventDefault()}
            position="items-aligned"
            className="SelectContent bg-white rounded-md shadow-md w-full"
          >
            <Select.Viewport className="SelectViewport h-40">
              <Select.Group>
                {categories.map((option) => {
                  return (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  );
                })}
              </Select.Group>
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    );
  }

  const SelectItem = forwardRef(({ children, ...props }, forwardedRef) => {
    return (
      <div className="first:border border-b p-2">
        <Select.Item
          {...props}
          className="flex items-center justify-between h-[30px] data-[highlighted]:outline-none cursor-pointer data-[highlighted]:text-purple-600 transition-colors duration-[0.3s] select-none"
          ref={forwardedRef}
        >
          <Select.ItemText>{children}</Select.ItemText>
          <Select.ItemIndicator className="SelectItemIndicator">
            <BsCheck size={28} />
          </Select.ItemIndicator>
        </Select.Item>
      </div>
    );
  });

  async function createFeedback() {
    const { error } = await supabase
      .from("feedback")
      .insert([
        {
          id: uuidv4(),
          title: title,
          description: description,
          category: selectedCategory,
          creation_time: DateStamp(new Date()),
          username: currentUser.userName,
          user_avatar: currentUser.userAvatar,
        },
      ])
      .then(() => {
        navigate("/");
      });

    if (error) {
      return null;
    }
  }

  return (
    <main className="w-[90%] lg:w-[40%] mx-auto">
      <button
        className="flex items-center gap-x-4 text-gray-600 font-bold mt-8"
        onClick={() => {
          navigate(-1);
        }}
      >
        <MdOutlineArrowBackIos color="blue" />
        <span>Go back</span>
      </button>
      <div className="bg-white rounded-lg mx-auto mt-14 relative px-4">
        <div className="h-[40px] w-[40px] lg:h-[60px] absolute translate-y-[-50%] lg:translate-x-6 flex justify-center items-center lg:w-[60px] bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-yellow-500 via-purple-500 rounded-full">
          <FaPlus size={18} color="white" />
        </div>
        <div className="w-[90%] mx-auto">
          <h1 className="font-bold text-gray-600 mt-[3rem] inline-block text-lg">
            Create New Feedback
          </h1>
          <form
            className="mt-8"
            onSubmit={(e) => {
              e.preventDefault();
              createFeedback();
            }}
          >
            <div>
              <label
                htmlFor="feedback-title"
                className="font-bold text-gray-600 text-sm"
              >
                Feedback Title
              </label>
              <span className="block text-gray-600">
                Add a short, descriptive headline
              </span>
              <input
                required
                type="text"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                className="Input bg-[#F7F8FD] h-[50px] mt-4 w-full"
                id="feedback-title"
              />
            </div>
            <div className="mt-8">
              <label
                htmlFor="feedback-category"
                className="font-bold text-gray-600 text-sm"
              >
                Category
              </label>
              <span className="block text-gray-600 ">
                Choose a category for your Feedback
              </span>
              <FeedbackCategory />
            </div>
            <div className="mt-8 py-4">
              <label
                htmlFor="feedback-detail"
                className="font-bold text-gray-600 text-sm"
              >
                Feedback Detail
              </label>
              <span className="block text-gray-600">
                Elaborate what can be added,improved or fixed
              </span>
              <textarea
                required
                rows={3}
                className="bg-[#F7F8FD] mt-4 focus:outline-blue-600 w-full p-2 rounded-md"
                id="feedback-detail"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </div>
            <div className="flex justify-end py-8">
              <div className="flex gap-x-3">
                <button
                  type="button"
                  onClick={() => {
                    navigate(-1);
                  }}
                  className="text-white hover:opacity-80 transition-opacity duration-[0.3s] bg-[rgba(58,67,116)] text-sm w-[90px] h-[40px] md:w-[120px] rounded-md"
                >
                  Cancel
                </button>
                <button
                  disabled={title.length === 0 || description.length === 0}
                  className="disabled:opacity-70 bg-purple-600 text-white items-center font-bold p-2 w-[150px] h-[40px] justify-center rounded-md cursor-pointer hover:bg-purple-400 transition-[background] duration-[0.3s] text-sm"
                >
                  Add Feedback
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser.user,
  };
}

export default connect(mapStateToProps)(FeedbackForm);
