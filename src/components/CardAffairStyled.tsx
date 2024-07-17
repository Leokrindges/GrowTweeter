import styled from "styled-components";

export const CardAffairStyled = styled.div`
  background-color: #e9e9e9;
  font-size: 0.4rem;
  height: 43%;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  margin-top: 1.5rem;

  .titleAffair{
    margin-top: 0.7rem;
  }

  h1 {
    margin-bottom: 0.5rem;
    font-size: 0.6rem;
    margin-left: 0.5rem;
  }
  p, a {
    font-size: 0.5rem;
    margin-left: 0.5rem;
  }

  a{
    color: #1D9BF0;
  }
  a:hover{
    color: #70bef1;
  }
`;
