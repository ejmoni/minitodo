import "./App.css";
import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./component/TodoTemplate";
import TodoHead from "./component/TodoHead";
import TodoList from "./component/TodoList";
import TodoCreate from "./component/TodoCreate";
import { useState } from "react";

const Globalstyle = createGlobalStyle`
  body{
    background: #e9ecef;
  }
  `;

function App() {
  // 변수=fetch() 데이터가담김
  const [todos, setTodos] = useState();
  

  return (
    <>
      <Globalstyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList todos={todos} />
        <TodoCreate />
      </TodoTemplate>
    </>
  );
}

export default App;
