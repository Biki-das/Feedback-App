import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { supabase } from "../../Supabase/Supabaseconfig";

function Roadmap() {
  const navigate = useNavigate();
  const [feedbackList, setFeedbackList] = useState(null);
  const [columns, setColumns] = useState({
    planned: [],
    inProgress: [],
    live: [],
  });

  useEffect(() => {
    getFeedback();
    async function getFeedback() {
      let { data } = await supabase
        .from("feedback")
        .select("*, upvotes(*),comments(*)");
      setFeedbackList(data);

      const columnData = {
        planned: data.filter((feedback) => feedback.status === "Planned"),
        inProgress: data.filter((feedback) => feedback.status === "Inprogress"),
        live: data.filter((feedback) => feedback.status === "Live"),
      };
      setColumns(columnData);
    }
  }, []);

  const onDragEnd = async (result) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceColumnId = source.droppableId;
      const destColumnId = destination.droppableId;
      const sourceItems = [...columns[sourceColumnId]];
      const destItems = [...columns[destColumnId]];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);

      const updatedColumns = {
        ...columns,
        [sourceColumnId]: sourceItems,
        [destColumnId]: destItems,
      };

      setColumns(updatedColumns);

      const feedbackId = removed.id;
      let feedbackStatus = "";
      if (destColumnId === "planned") {
        feedbackStatus = "Planned";
      } else if (destColumnId === "inProgress") {
        feedbackStatus = "Inprogress";
      } else if (destColumnId === "live") {
        feedbackStatus = "Live";
      }

      // Update feedback status directly in the columns state
      updatedColumns[destColumnId] = updatedColumns[destColumnId].map(
        (feedback) =>
          feedback.id === feedbackId
            ? { ...feedback, status: feedbackStatus }
            : feedback
      );
      setColumns(updatedColumns);

      // Update feedback status in the database
      await updateFeedbackStatus(feedbackStatus, feedbackId);
    } else {
      const columnId = source.droppableId;
      const copiedItems = [...columns[columnId]];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);

      const updatedColumns = {
        ...columns,
        [columnId]: copiedItems,
      };

      setColumns(updatedColumns);
    }
  };

  async function updateFeedbackStatus(feedbackStatus, feedbackId) {
    const { error } = await supabase
      .from("feedback")
      .update({ status: feedbackStatus })
      .eq("id", feedbackId);
    if (error) {
      console.log("Error updating feedback status:", error);
    }
  }

  function getFeedbackCardstyles(feedbackStatus) {
    if (feedbackStatus === "Planned") {
      return "border-orange-400";
    } else if (feedbackStatus === "Inprogress") {
      return "border-purple-400";
    } else {
      return "border-cyan-400";
    }
  }

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
      <div className="mt-8">
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="flex">
            {Object.entries(columns).map(([columnId, column]) => {
              return (
                <div key={columnId} className="w-[33.33%]">
                  <h3 className="text-lg font-bold text-center text-gray-600">
                    {columnId === "planned"
                      ? "Planned"
                      : columnId === "inProgress"
                      ? "In Progress"
                      : "Live"}
                  </h3>
                  <Droppable droppableId={columnId}>
                    {(provided) => (
                      <ul
                        className="mt-4 p-4  rounded-lg"
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                      >
                        {column.map((feedback, index) => {
                          return (
                            <Draggable
                              key={feedback.id}
                              draggableId={feedback.id.toString()}
                              index={index}
                            >
                              {(provided) => (
                                <li
                                  className={`bg-white rounded-lg p-4 mb-4 shadow-md border-t-8 ${getFeedbackCardstyles(
                                    feedback.status
                                  )}`}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  ref={provided.innerRef}
                                >
                                  <h4 className="font-bold">
                                    {feedback.title}
                                  </h4>
                                  <p className="mt-2 text-gray-600">
                                    {feedback.description}
                                  </p>
                                </li>
                              )}
                            </Draggable>
                          );
                        })}
                        {provided.placeholder}
                      </ul>
                    )}
                  </Droppable>
                </div>
              );
            })}
          </div>
        </DragDropContext>
      </div>
    </div>
  );
}

export default Roadmap;
