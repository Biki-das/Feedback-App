import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import { supabase } from "../../Supabase/Supabaseconfig";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

function Roadmap() {
  const navigate = useNavigate();
  const [feedbackList, setFeedbackList] = useState(null);

  useEffect(() => {
    getFeedback();
    async function getFeedback() {
      let { data } = await supabase
        .from("feedback")
        .select("*, upvotes(*),comments(*)");
      setFeedbackList(data);
    }
  }, []);

  return (
    <div className="w-[80%] mx-auto">
      <div className=" bg-[#373F68] justify-between h-[100px] flex items-center rounded-lg mx-auto mt-6 p-4">
        <div>
          <button
            className="flex items-center gap-x-2 text-white font-bold"
            onClick={() => {
              navigate(-1);
            }}
          >
            <MdOutlineArrowBackIos color="white" />
            <span>Go back</span>
          </button>
          <h2 className="text-white font-bold text-xl">Roadmap</h2>
        </div>
        <button
          onClick={() => {
            navigate("/createfeedback");
          }}
          className="flex bg-purple-600 text-white items-center font-bold p-2 md:w-[150px] h-[38px] justify-center rounded-md cursor-pointer hover:bg-purple-400 transition-[background] duration-[0.3s] text-sm"
        >
          <AiOutlinePlus />
          Add Feedback
        </button>
      </div>
      <div>
        <div className="mt-6 flex justify-between w-full">
          <DragDropContext onDragEnd={(res) => console.log(res)}>
            <Droppable droppableId="planned">
              {(provided, snapshot) => {
                return (
                  <div
                    className="flex-1"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {provided.placeholder}
                    <PlannedFeedback feedbackList={feedbackList} />
                  </div>
                );
              }}
            </Droppable>
            <Droppable droppableId="inProgress">
              {(provided, snapshot) => {
                return (
                  <div
                    className="flex-1"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {provided.placeholder}
                    <InProgressFeedback feedbackList={feedbackList} />
                  </div>
                );
              }}
            </Droppable>
            <Droppable droppableId="live">
              {(provided, snapshot) => {
                return (
                  <div
                    className="flex-1"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {provided.placeholder}
                    <LiveFeedback feedbackList={feedbackList} />
                  </div>
                );
              }}
            </Droppable>
          </DragDropContext>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;

function PlannedFeedback({ feedbackList }) {
  return feedbackList
    ?.filter((feedback) => feedback.status === "Planned")
    .map((plannedFeedback, index) => {
      return (
        <Draggable key={index} draggableId={`planned-${index}`} index={index}>
          {(provided, snapshot) => {
            return (
              <Feedbackcard
                title={plannedFeedback.title}
                dragRef={provided.innerRef}
                dragHandleProps={provided.dragHandleProps}
                draggableProps={provided.draggableProps}
              />
            );
          }}
        </Draggable>
      );
    });
}

function InProgressFeedback({ feedbackList }) {
  return feedbackList
    ?.filter((feedback) => feedback.status === "Inprogress")
    .map((inprogressFeedback, index) => {
      return (
        <Draggable key={index} draggableId={`inProgress-${index}`} index={index}>
          {(provided, snapshot) => {
            return (
              <Feedbackcard
                title={inprogressFeedback.title}
                dragRef={provided.innerRef}
                dragHandleProps={provided.dragHandleProps}
                draggableProps={provided.draggableProps}
              />
            );
          }}
        </Draggable>
      );
    });
}

function LiveFeedback({ feedbackList }) {
  return feedbackList
    ?.filter((feedback) => feedback.status === "Live")
    .map((liveFeedback, index) => {
      return (
        <Draggable key={index} draggableId={`live-${index}`} index={index}>
          {(provided, snapshot) => {
            return (
              <Feedbackcard
                title={liveFeedback.title}
                dragRef={provided.innerRef}
                dragHandleProps={provided.dragHandleProps}
                draggableProps={provided.draggableProps}
              />
            );
          }}
        </Draggable>
      );
    });
}

function Feedbackcard({ dragRef, dragHandleProps, draggableProps,title }) {
  return (
    <div
      ref={dragRef}
      {...draggableProps}
      {...dragHandleProps}
      className="rounded-lg bg-white h-[300px] w-[90%] mx-auto border-t-8  border-orange-600 mt-6"
    >
      <h2>{title}</h2>
    </div>
  );
}
