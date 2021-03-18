import React, { useEffect, useState } from "react";
import { InputField } from "./inputField";
import { Todo } from "./Todo";

interface TodoListProps {}

interface TodoProps {
  title: string;
  completed: boolean;
}

export const TodoList: React.FC<TodoListProps> = () => {
  const [tasksRemaining, setTasksRemaining] = useState<Number>(0);
  const [todo, setTodo] = useState<TodoProps[]>([
    {
      title: "Grab some Pizza",
      completed: true,
    },
    {
      title: "Do your workout",
      completed: false,
    },
    {
      title: "Hangout with friends",
      completed: false,
    },
  ]);
  const addTodo = (title: string) => {
    const newTodo = [...todo, { title, completed: false }];
    setTodo(newTodo);
  };
  useEffect(() => {
    setTasksRemaining(todo.filter((todo) => !todo.completed).length);
  }, [todo]);
  // const addTodo = (id) => {
  //   const newTodo = [...todo, {}];
  // };
  return (
    <div className="tdo-container">
      {tasksRemaining}
      <InputField addTodo={addTodo} />
      {todo.map((todo, index) => (
        <Todo todo={todo} index={index} key={index}/>
      ))}
    </div>
  );
};
