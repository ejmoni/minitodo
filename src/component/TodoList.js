import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div`
  flex: 1; /* 차지할수 있는영역을 꽉채운다*/
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function TodoList() {
  const [content, setContent] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/todo")
      .then((res) => res.json())
      .then((data) => {
        setContent(data);
      })
      .catch((err) => {});
  }, []);
  console.log(content);

  return (
    <TodoListBlock>
      {/* <TodoItem text="프로젝트 생성하기" done={true} />
      <TodoItem text="컴포넌트왜고장인가" done={true} />
      <TodoItem text="고장고치기" done={false} /> */}
      {content.map((todo) => (
        <TodoItem text={todo.title} key={todo.id} />
      ))}
    </TodoListBlock>
  );
}

export default TodoList;
