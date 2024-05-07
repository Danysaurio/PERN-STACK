import React from "react";

import { useDispatch } from "react-redux";

import { FaRegTrashCan } from "react-icons/fa6";
import { modalActions } from "@/store/modalSlice";
import { useFirebaseTodos } from "@/hooks/useFirestoreTodos";

interface DeleteButtonTypeProps {
  id: string;
  titlle: string;
}

const DeleteButton = ({ id, titlle }: DeleteButtonTypeProps) => {
  const dispatch = useDispatch();
  const { showModal } = modalActions;

  const handleOnDelete = () => {
    dispatch(
      showModal({
        id: id,
        show: true,
        title: "Are you sure bb?",
        description: `Do you want to remove the task ${titlle} ?`,
      })
    );
  };

  return (
    <button
      className="btn btn-square btn-xs btn-error btn-outline"
      title="Delete"
      aria-label="Delete"
      onClick={handleOnDelete}
    >
      <FaRegTrashCan />
    </button>
  );
};

export default DeleteButton;
