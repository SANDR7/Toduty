import React, { useState } from "react";

interface InputFieldProps {
  addTodo: any;
}

export const InputField: React.FC<InputFieldProps> = ({ addTodo }) => {
  const [value, setValue] = useState<any>("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!value) return;

    addTodo(value);
    setValue("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
      />
    </form>
  );
};
