import { Pencil } from "lucide-react";
import InputField from "./InputField";

const UpdateModal = ({ id }) => {
  return (
    <div>
      <button
        className="btn btn-square btn-sm"
        onClick={() => document.getElementById(id).showModal()}
      >
        <Pencil />
      </button>
      <dialog id={id} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Update Task</h3>
          <h3>id:{id}</h3>
          <InputField id={id} />
          <form method="dialog" className="modal-backdrop">
            <button className="btn">close</button>
          </form>
        </div>
      </dialog>
    </div>
  );
};
UpdateModal.propTypes = {
  id: String,
};
export default UpdateModal;
