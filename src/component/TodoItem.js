import React from "react";
import styled, { css } from "styled-components";
import { MdDone, MdDelete } from "react-icons/md";

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`;
const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;
const Check = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid black;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${props =>
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;
const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: black;
  ${props =>
    props.done &&
    css`
      color: gray;
    `}
`;

function TodoItem({ id, done, text }) {
  return (
    <TodoItemBlock>
      <Check done={done}>{done && <MdDone />}</Check>
      <Text done={done}>{text}</Text>
      <Remove>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
}

export default TodoItem;
