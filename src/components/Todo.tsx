import React from "react";

interface TodoProps {
  todo: any;
  index: number;
  completeTodo?: boolean | any;
  removeTodo?: any;
}

export const Todo: React.FC<TodoProps> = ({
  todo,
  index,
  completeTodo,
  removeTodo,
}) => {
  return (
    <div className="todoItem">
      <span className="todoItem-header">{todo.title}</span>
      {/* <button onClick={() => completeTodo(index)}>Complete</button> */}
    </div>
  );
};
