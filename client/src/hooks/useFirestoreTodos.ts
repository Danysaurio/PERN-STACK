import { useMutation, useQuery, useQueryClient } from "react-query";
import { addDoc, collection, doc, getDocs, updateDoc } from "firebase/firestore";

import { todosStore } from "@/lib/firebase";
import { ListItemType } from "@/Types";

const getTodos = async (): Promise<ListItemType[]> => {
  const querySnapshot = await getDocs(collection(todosStore, "tasksList"));
  const tasksList: ListItemType[] = querySnapshot.docs.map(doc => {
    const data = doc.data();
    return {
      id: doc.id,
      title: data.title as string,
      description: data.description as string,
      completed: data.completed as boolean
    }
  }

  );

  return tasksList;
}

const addNewTask = async (newTask: { title: string, description: string }): Promise<void> => {
  await addDoc(collection(todosStore, 'tasksList'), newTask);
}

const toggleTask = async ({ id, completed }: { id: string, completed: boolean }): Promise<void> => {
  const taskRef = doc(todosStore, 'taskList', id);
  await updateDoc(taskRef, { completed: !completed })

}

export const useFirebaseTodos = () => {
  const queryClient = useQueryClient();

  const getAllTaskQuery = useQuery<ListItemType[], Error>('todos', getTodos);

  const addNewTodoMutation = useMutation(addNewTask, {
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
    }
  })

  const toggleTaskMutation = useMutation(toggleTask, {
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
    }
  })
  return {
    getAllTask: getAllTaskQuery,
    addNewTask: addNewTodoMutation,
    toggleTask: toggleTaskMutation
  }
}

