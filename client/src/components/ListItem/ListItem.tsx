import { useFirebaseTodos } from "@/hooks/useFirestoreTodos";
import { ListItemType } from "@/Types";
import classNames from "classnames";
import React from "react";
import { FaCheck } from "react-icons/fa6";
import DeleteButton from "./DeleteButton";

const ListItem = ({
  id,
  title,
  description,
  completed,
  number = 0,
}: ListItemType) => {
  const cls = classNames(["hover", completed ? "line-through opacity-30" : ""]);

  const { toggleTask } = useFirebaseTodos();

  const { mutateAsync, isLoading } = toggleTask;

  const handleOnDone = async () => {
    await mutateAsync({ id, completed });
  };

  return (
    <tr className={cls}>
      <th>{number + 1}</th>
      <td>{title}</td>
      <td>{description}</td>
      <td>
        <button
          className="btn btn-square btn-xs btn-outline btn-success mr-3"
          title="Done"
          aria-label="Done"
          onClick={handleOnDone}
          disabled={isLoading}
        >
          <FaCheck />
        </button>
        <DeleteButton id={id} titlle={title} />
      </td>
    </tr>
  );
};

export default ListItem;
