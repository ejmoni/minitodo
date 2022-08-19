import React, { useState } from "react";
import { MdAdd } from "react-icons/md";
import styled, { css } from "styled-components";

const Sticker = styled.div`
  background-color: #c6eb34;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: block;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 43%;
  bottom: 725px;
  border: none;
  outline: none;
  display: flex;
`;

const CircleButton = styled.button`
  background-color: #c6eb34;
  &:hover {
    background: #cfe86b;
  }
  &:active {
    background: #c6eb34;
  }
  z-index: 5;
  cursor: pointer;
  width: 50px;
  height: 50px;
  display: block;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  position: absolute;
  left: 50%;
  bottom: 2px;
  transform: translate(-50%, 50%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;

  ${props =>
    props.open &&
    css`
      background: #c6eb34;
      &:hover {
        background: #cfe86b;
      }
      &:active {
        background: #c6eb34;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;
const InsertFormPositioner = styled.div`
  width: 100%;
  bottom: 3px;
  left: 0;
  position: absolute;
`;
const InsertForm = styled.form`
  background: #f8f9fa;
  padding: 32px 32px 32px 72px;

  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`;
const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

function TodoCreate() {
  const [open, setOpen] = useState(false);
  const onToggle = () => setOpen(!open);

  return (
    <>
    {/* {변수.map(el=>{return <div>{el.title}</div>})} */}
      <Sticker />
      {open && (
        <InsertFormPositioner>
          <InsertForm>
            <Input placeholder="할 일을 입력후, enter를 누르세요" />
          </InsertForm>
        </InsertFormPositioner>
      )}
      <CircleButton onClick={onToggle} open={open}>
        <MdAdd/> 
      </CircleButton>
    </>
  );
}

export default TodoCreate;
