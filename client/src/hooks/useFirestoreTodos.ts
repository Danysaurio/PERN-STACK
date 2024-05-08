import { useMutation, useQuery, useQueryClient } from "react-query";
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";

import { auth, todosStore } from "@/lib/firebase";
import { ListItemType } from "@/Types";
import { signInWithEmailAndPassword } from "firebase/auth";

const useLogin = async () => {
  const userCredential = await signInWithEmailAndPassword(auth, "danyzavala94@gmail.com", "210141257");
  return userCredential.user;
}


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
  const taskRef = doc(todosStore, 'tasksList', id);
  await updateDoc(taskRef, { completed: !completed })
}

const deleteTask = async (id: string): Promise<void> => {
  const taskRef = doc(todosStore, 'tasksList', id);
  await deleteDoc(taskRef);
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

  const deleteTaskMutation = useMutation(deleteTask, {
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
    }
  })

  const logginMutation = useMutation(useLogin, {
    onSuccess(data, variables, context) {
      console.log(data)
    },
  })

  return {
    login: logginMutation,
    getAllTask: getAllTaskQuery,
    addNewTask: addNewTodoMutation,
    toggleTask: toggleTaskMutation,
    deleteTask: deleteTaskMutation
  }
}

