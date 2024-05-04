import { Inputs } from "@/Types";

import axios from "axios";

const getAllTask = async () => {
  return await axios.get("http://localhost:4000/tasks").then((res) => res.data);
};

const addTask = async (newTask: Inputs) => {
  try {
    const response = await axios.post("http://localhost:4000/tasks", newTask);
    return response.data;
  } catch (error) {
    console.log('ERROR', error)
  }

};


export { addTask, getAllTask }