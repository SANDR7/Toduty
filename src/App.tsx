import React from "react";
import Title from "./components/title";
import { TodoList } from "./components/TodoList";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Toduty</h1>
      <Title name="Sander" />

      <TodoList />
    </div>
  );
};

export default App;
