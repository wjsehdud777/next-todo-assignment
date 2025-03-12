import { Todo } from "@/types/todo.type";

export const getTodos = async () => {
  const response = await fetch("http://localhost:3000/todo");
  const data: Todo[] = await response.json();

  return data;
};
