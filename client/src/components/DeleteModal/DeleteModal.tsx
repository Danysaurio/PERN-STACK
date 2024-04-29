"use client";
const DeleteModal = () => {
  return (
    <dialog
      id="my_modal_2"
      className="modal"
      // open={true}
      onClose={() => console.log("close")}
    >
      <div className="modal-box">
        <h3 className="font-bold text-lg">Are you sure?</h3>
        <p className="py-4">Do you want to remove the task "barrer"?</p>
        <div className="modal-action">
          <button className="btn">Cancel</button>
          <button className="btn btn-error">Remove</button>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default DeleteModal;
