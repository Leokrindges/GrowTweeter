import styled from "styled-components";

export const InputGroupStyled = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 70%;

  label {
    padding-top: 6px;
    color: rgb(136, 136, 136);
    margin-bottom: 4px;
    font-size: 10px;
  }

  input {
    height: 5px;
    height: 12px;
    outline: none;
    border-radius: 8px;
    border: 1px solid rgb(221, 221, 221);
    padding: 5px;
    background-color: #e8f0fe;
  }

  ::placeholder {
    color: black;
    font-size: 10px;
  }

  button {
    width: 100%;
    height: 20px;
    border: none;
    border-radius: 8px;
    background-color: rgb(29, 155, 240);
    color: rgb(250, 250, 250);
    margin-top: 10px;
    font-size: 12px;
  }

  button:hover {
    background-color: rgb(84, 162, 214);
    cursor: pointer;
  }
`;
