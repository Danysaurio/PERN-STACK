import { useDispatch, useSelector } from "react-redux";
import { tasksActions } from "@/store/tasksSlice";
import { useEffect, useState } from "react";
import ListItem from "../ListItem";
import ListLoading from "./ListLoading";
import { getAllTask } from "@/services";
import { ListItemType, Todos } from "@/Types";
import { useFirebaseTodos } from "@/hooks/useFirestoreTodos";

const List = () => {
  // const [loading, setLoading] = useState<boolean>(true);
  // const todos: ListItemType[] = useSelector((state: Todos) => state.todos.list);
  // const dispatch = useDispatch();
  // const { fetchTasksSuccess } = tasksActions;

  const { data: todoList, isLoading, isError } = useFirebaseTodos().getAllTask;

  if (isError) return <p>Error al cargar las tareas.</p>;

  if (isLoading) {
    return <ListLoading />;
  }

  if (!todoList || todoList.length === 0) {
    return (
      <div className="text-center w-full text-xl">
        <span>No tienes nada</span>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="overflow-x-auto max-h-[80vh]">
        <table className="table table-pin-rows">
          <thead>
            <tr>
              <th>Number</th>
              <th>Title</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {todoList.map((todo, i) => (
              <ListItem key={`item-${i}`} {...todo} number={i} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default List;
