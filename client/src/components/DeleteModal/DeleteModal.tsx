"use client";
import { useFirebaseTodos } from "@/hooks/useFirestoreTodos";
import { modalActions, ModalState } from "@/store/modalSlice";
import { useDispatch, useSelector } from "react-redux";

const DeleteModal = () => {
  const dispatch = useDispatch();
  const { closeModal } = modalActions;

  const { deleteTask } = useFirebaseTodos();

  const { mutateAsync: deleteMutation } = deleteTask;

  const { id, show, title, description } = useSelector(
    (state: { modal: ModalState }) => state.modal
  );

  const handleConfirmDelete = async () => {
    await deleteMutation(id);
    handleCloseModal();
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <dialog
      id="my_modal_2"
      className="modal"
      open={show}
      onClose={() => handleCloseModal()}
    >
      <div className="modal-box">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="py-4">{description}</p>
        <div className="modal-action">
          <button className="btn" onClick={handleCloseModal}>
            Cancel
          </button>
          <button className="btn btn-error" onClick={handleConfirmDelete}>
            Remove
          </button>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default DeleteModal;
