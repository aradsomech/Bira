import React from "react";
import { priorities, statuses } from "../data/data";

const CreateTask = () => {
  return (
    <div className="p-4">
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Title</span>
        </div>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
      </label>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Status</span>
        </div>
        <select className="select select-bordered">
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
        <select className="select select-bordered">
          <option disabled selected></option>
          {priorities.map((priority) => (
            <option key={priority.value}>{priority.label}</option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default CreateTask;
