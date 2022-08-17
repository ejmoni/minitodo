import React from "react";
import styled from "styled-components";

const TodoListBlock = styled.div`
  flex: 1; /* 차지할수 있는영역을 꽉채운다*/
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function TodoList() {
  return <TodoListBlock>TodoList</TodoListBlock>;
}

export default TodoList;
