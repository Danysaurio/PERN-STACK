import { useForm, SubmitHandler } from "react-hook-form";
import { useMutation } from "react-query";
import { useDispatch } from "react-redux";

import { tasksActions } from "@/store/tasksSlice";
import { addTask } from "@/services";
import { Inputs } from "@/Types";

const Addform = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const dispatch = useDispatch();

  const { mutate: addTaskMutation, isLoading } = useMutation(addTask, {
    onSuccess: (data) => {
      if (data.error) {
      }

      dispatch(tasksActions.addNewTask(data));
      reset();
    },
  });

  const handleAddTask: SubmitHandler<Inputs> = (newTask) => {
    addTaskMutation(newTask);
  };

  return (
    <div className="card w-96 bg-slate-50 shadow-xl text-gray-800">
      <form
        onSubmit={handleSubmit(handleAddTask)}
        className="card-body items-center text-center"
      >
        <h2 className="card-title">Add your new task</h2>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text text-gray-800">Title</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-primary w-full max-w-xs bg-slate-50"
            {...register("title", { required: true })}
          />
          {errors.title && (
            <div className="label">
              <span className="label-text-alt text-red-700">
                Title is required
              </span>
            </div>
          )}
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-gray-800">Description</span>
          </div>
          <textarea
            className="textarea textarea-bordered textarea-primary h-24 w-full bg-slate-50"
            placeholder="Type here"
            {...register("description", { required: true })}
          ></textarea>
          {errors.description && (
            <div className="label">
              <span className="label-text-alt text-red-700">
                Description is required
              </span>
            </div>
          )}
        </label>

        <div className="card-actions mt-5">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="loading loading-spinner loading-xs"></span>
            ) : (
              <span>Add task</span>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Addform;
