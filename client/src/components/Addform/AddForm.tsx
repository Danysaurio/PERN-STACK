import React from "react";

const Addform = () => {
  return (
    <div className="card w-96 bg-slate-50 shadow-xl text-gray-800">
      <div className="card-body items-center text-center">
        <h2 className="card-title">Add your new task</h2>

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text text-gray-800">Title</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-primary w-full max-w-xs bg-slate-50"
          />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-gray-800">Description</span>
          </div>
          <textarea
            className="textarea textarea-bordered textarea-primary h-24 w-full bg-slate-50"
            placeholder="Type here"
          ></textarea>
        </label>

        <div className="card-actions mt-5">
          <button className="btn btn-primary">Add task</button>
        </div>
      </div>
    </div>
  );
};

export default Addform;
