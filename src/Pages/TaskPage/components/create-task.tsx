import React, { useState } from "react";
import { priorities, statuses } from "../data/data";
import { ITaskInput } from "@/lib/types";
import axios from "axios";

const CreateTask = () => {
  const [inputsValue, setInputValue] = useState<ITaskInput>({
    title: "",
    content: "",
    priority: "",
    status: "",
    assigneeId: "133",
  });
  console.log(inputsValue);

  const handleInputChange = (e: any) => {
    console.log(e.target.value);

    setInputValue((currentState) => ({
      ...currentState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async () => {
    try {
      console.log(inputsValue);

      const { data } = await axios.post("/api/v1/tasks", inputsValue);

      // Handle success, you can log or perform other actions if needed
      setInputValue({
        title: "",
        content: "",
        priority: "",
        status: "",
        assigneeId: "133",
      });
      // Redirect to the "/myCards" route
    } catch (err: any) {
      console.log("Error", err.response);
      // Handle error if necessary
    }
  };
  return (
    <div>
      {/* The button to open modal */}
      <label htmlFor="my_modal_6" className="btn">
        Create task
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">Create new task!</h3>
          <div className="p-4">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Title</span>
              </div>
              <input
                id="title"
                onChange={handleInputChange}
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                value={inputsValue.title}
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Status</span>
              </div>
              <select
                id="status"
                onChange={handleInputChange}
                className="select select-bordered"
                value={inputsValue.status}
              >
                <option disabled selected></option>
                {statuses.map((status) => (
                  <option key={status.value}>{status.label}</option>
                ))}
              </select>
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Priority</span>
              </div>
              <select
                value={inputsValue.priority}
                id="priority"
                onChange={handleInputChange}
                className="select select-bordered"
              >
                <option disabled selected></option>
                {priorities.map((priority) => (
                  <option key={priority.value}>{priority.label}</option>
                ))}
              </select>
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Content</span>
              </div>
              <textarea
                value={inputsValue.content}
                id="content"
                placeholder="Bio"
                className="textarea textarea-bordered textarea-lg w-full max-w-xs"
                onChange={handleInputChange}
              ></textarea>
            </label>
          </div>
          <div className="modal-action">
            <label htmlFor="my_modal_6" className="btn">
              Close
            </label>
            <label onClick={handleSubmit} htmlFor="my_modal_6" className="btn">
              Apply changes
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTask;
