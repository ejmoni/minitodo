import React from "react";
import styled from "styled-components";
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
  flex: 1; /* 차지할수 있는영역을 꽉채운다*/
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;

`;

function TodoList() {
  return <TodoListBlock>
    <TodoItem text="프로젝트 생성하기" done={true}/>
    <TodoItem text="컴포넌트왜고장인가" done={true}/>
    <TodoItem text="고장고치기" done={false}/>
  </TodoListBlock>;
}

export default TodoList;
