import { useDispatch, useSelector } from "react-redux";
import { tasksActions } from "@/store/tasksSlice";
import { useEffect, useState } from "react";
import ListItem from "../ListItem";
import ListLoading from "./ListLoading";
import { getAllTask } from "@/services";
import { ListItemType, Todos } from "@/Types";

const List = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const todos: ListItemType[] = useSelector((state: Todos) => state.todos.list);
  const dispatch = useDispatch();
  const { fetchTasksSuccess } = tasksActions;

  useEffect(() => {
    getAllTask().then((res) => {
      dispatch(fetchTasksSuccess(res));
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <ListLoading />;
  }

  if (todos.length === 0) {
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
            {todos.map((todo, i) => (
              <ListItem key={`item-${i}`} {...todo} number={i} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default List;
