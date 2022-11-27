import styled from "styled-components";

export const FullCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 128px;
  padding: 10px 20px;
  border-top: solid 2px #E0E0E0;;
  div {
    display: flex;
    justify-content: space-between;
    h3 {
      font-weight: 600;
      font-size: 0.875rem;
      color: #333333;
    }
    span {
      font-weight: 600;
      font-size: 0.875rem;
      color: #828282;
    }
  }
  button {
    width: 100%;
    height: 60px;
    padding: 0px 20px;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    font-weight: 600;
    font-size: 1rem;
    font-family: 'Inter', sans-serif;
    color: #828282;
    background-color: transparent;
    cursor: pointer;
  }
  button:hover{
    border: 2px solid #828282;
    color: #E0E0E0;
    background-color: #828282;
    transition: 0.5s;
  }
`;
