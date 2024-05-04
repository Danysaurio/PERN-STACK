import { ListItemType } from "@/Types";
import React from "react";
import { FaCheck, FaRegTrashCan } from "react-icons/fa6";

const ListItem = ({
  id,
  title,
  description,
  completed,
  number,
}: ListItemType) => {
  return (
    <tr className="hover">
      <th>{number + 1}</th>
      <td>{title}</td>
      <td>{description}</td>
      <td>
        <button
          className="btn btn-square btn-xs btn-outline btn-success mr-3"
          title="Done"
          aria-label="Done"
          //onClick={() => dispatch(toggleTodo(1))}
        >
          <FaCheck />
        </button>
        <button
          className="btn btn-square btn-xs btn-error btn-outline"
          title="Delete"
          aria-label="Delete"
        >
          <FaRegTrashCan />
        </button>
        {/* <DeleteModal /> */}
      </td>
    </tr>
  );
};

export default ListItem;
