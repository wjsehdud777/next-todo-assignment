import TodoForm from "@/components/todo/TodoForm";
import TodoList from "@/components/todo/TodoList";
import React from "react";

const HomePage = () => {
  return (
    <section>
      <TodoList />
      <TodoForm />
    </section>
  );
};

export default HomePage;
