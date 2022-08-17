import React from "react";
import styled, {createGlobalStyle} from 'styled-components';
import App from "../App.js";

const TodoTemplateBlock = styled.div`
    width: 512px;
    height: 768px;

    position: relative;
    background-color: white;
    border-radius: 3px;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

    margin: 0 auto;
    margin-top: 96px;
    margin-bottom: 32px;
    display: flex;
    flex-direction: column;
`

function TodoTemplate({children}) {
  return (
    <TodoTemplateBlock>
        {children}
    </TodoTemplateBlock>
  );
}

export default TodoTemplate;