import { Trash } from "lucide-react";
import useDeleteTodo from "../hooks/useDeleteTodo";
import toast from "react-hot-toast";

const DeleteModal = ({ id }) => {
  const { makeRequest, success, loading, error } = useDeleteTodo();
  const handleDelete = async () => {
    await makeRequest(id);
    if (success) {
      toast.success(`Task ${id ? "Updated" : "Added"} Successfully`);
    }
    if (error) {
      toast.error(error);
    }
    document.getElementById(`delete-${id}`).close()
  };
  const handleClose = () => {
    document.getElementById(`delete-${id}`).close()

  }
  return (
    <div>
      <button
        className="btn btn-square btn-error btn-sm"
        onClick={() => document.getElementById(`delete-${id}`).showModal()}
      >
       <Trash/>
      </button>
      <dialog id={`delete-${id}`} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Are You Sure ?</h3>
          <p className="py-4">This action can&apos;t be undone.</p>
          <div className="modal-action items-end gap-5">
              <button
                disabled={loading}
                className="btn btn-error"
                onClick={handleDelete}
              >
                {loading ? (
                  <>
                    <span className="loading loading-spinner"></span>
                    Deleting...
                  </>
                ) : (
                  <>Delete</>
                )}
              </button>
            
              
              <button className="btn" type="button" onClick={handleClose}>close</button>
            
          </div>
        </div>
      </dialog>
    </div>
  );
};

DeleteModal.propTypes = {
  id: String,
};

export default DeleteModal;
