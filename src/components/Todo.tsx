import React from "react";

interface TodoProps {
  todo: any;
  index: number;
  completeTodo?: boolean;
  removeTodo?: any;
}

export const Todo: React.FC<TodoProps> = ({
  todo,
  index,
  completeTodo,
  removeTodo,
}) => {
  return <div>
    {todo.title}
  </div>;
};
