import UpdateModal from "./UpdateModal";
import DeleteModal from "./DeleteModal";
import toast from "react-hot-toast";

const Todos = ({ todos, loading, error }) => {
  if (error) {
    toast.error(error);
  }
  console.log(todos)
  return (
    <div className="container mx-auto px-8 space-y-6 flex flex-col justify-center items-center">
      {!todos || loading
        ? [0, 1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="flex w-52 flex-col gap-4">
              <div key={item} className="card bg-base-100 w-96 shadow-xl">
                <div className="card-body">
                  <div className="skeleton h-4 w-full"></div>
                  <div className="card-actions justify-end">
                    <div className="skeleton btn btn-square btn-sm"></div>
                    <div className="skeleton btn btn-error btn-square btn-sm"></div>
                  </div>
                </div>
              </div>
            </div>
          ))
        : todos.map((item) => (
            <div key={item._id} className="card bg-base-100 w-96 shadow-xl">
              <div className="card-body">
                <p>{item.text}</p>
                <div className="card-actions justify-end">
                  <UpdateModal id={item._id} />
                  <DeleteModal id={item._id} />
                </div>
              </div>
            </div>
          ))}
    </div>
  );
};
Todos.propTypes = {
  todos: [String],
  loading: Boolean,
  error: String,
};
export default Todos;
