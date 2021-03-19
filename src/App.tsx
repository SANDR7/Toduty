import React from "react";
import { Header } from "./base/header";
import Title from "./components/title";
import { TodoList } from "./components/TodoList";
import "./css/style.css";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="App">
        <Title name="Sander" />
        <TodoList />
      </div>
    </div>
  );
};

export default App;
