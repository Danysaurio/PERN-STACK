export interface ListItemType {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  number?: number;
}

export interface Inputs {
  title: string;
  description: string;
}

// == Store
export interface Todos {
  todos: TasksState;
}

export interface TasksState {
  list: ListItemType[];
}
