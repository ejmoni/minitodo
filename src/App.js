import "./App.css";
import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./component/TodoTemplate";
import TodoHead from "./component/TodoHead";
import TodoList from "./component/TodoList";

const Gloalstyle = createGlobalStyle`
  body{
    background: #e9ecef;
  }
  `;

function App() {
  return (
    <>
      <Gloalstyle />
      <TodoTemplate>
        <TodoHead />
          <TodoList />
      </TodoTemplate>
    </>
  );
}

export default App;
