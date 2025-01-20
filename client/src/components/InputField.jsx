import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TodoSchema } from "../utils/schemas";

import usePostTodos from "../hooks/usePostTodos";
import toast from "react-hot-toast";


const InputField = ({id=null}) => {
  const { makeRequest, success, loading, error } = usePostTodos();
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm({ resolver: zodResolver(TodoSchema) });

  const onSubmit = async (values) => {
    await makeRequest(values.text, id);
    if (success) {
      toast.success("Task added successfully");
    }
    if (error) {
      toast.error(error);
    }
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="container mx-auto px-8 flex gap-4 items-end justify-center mb-12">
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Enter a Task</span>
        </div>
        <input
          type="text"
          placeholder="Type here"
          className={`input ${
            errors.text ? "input-error" : "input-bordered"
          } w-full max-w-xs`}
          {...register("text")}
        />
        {errors.text && (
          <div className="label">
            <span className="label-text-alt text-error">{errors}</span>
          </div>
        )}
      </label>
      <button type="submit" disabled={loading} className="btn btn-primary">
        {loading ? (
          <>
            <span className="loading loading-spinner"></span>
            {id ? "Updating..." : "Adding..."}
          </>
        ) : (
          <> {id ? "Update" : "Add"} Task</>
        )}
      </button>
    </form>
  );
};
InputField.propTypes = {
  id: String | null,
};
export default InputField;
