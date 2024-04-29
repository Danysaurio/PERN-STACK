import { useDispatch, useSelector } from "react-redux";
import { tasksActions } from "@/store/tasksSlice";
import { useEffect, useState } from "react";
import axios from "axios";
import ListItem from "../ListItem";
import { ListItemType } from "../ListItem/ListItem";
import ListLoading from "./ListLoading";
import { todo } from "node:test";
import { getAllTask } from "@/services";

const List = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const todos: ListItemType[] = useSelector((state: any) => state.todos.list);
  const dispatch = useDispatch();
  const { fetchTasksSuccess } = tasksActions;

  useEffect(() => {
    const getTask = async () => {
      const result = await axios
        .get("http://localhost:4000/tasks/")
        .then((res) => res.data);

      dispatch(fetchTasksSuccess(result));
      setLoading(false);
    };

    getAllTask().then((res) => console.log(res));

    getTask();
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
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <ListItem {...todo} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default List;
