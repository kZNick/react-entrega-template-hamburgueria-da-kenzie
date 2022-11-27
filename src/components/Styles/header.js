import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  color: aqua;
  padding: 15px 10%;
  background-color: #f5f5f5;
  @media(max-width: 800px){
    display: flex;
    flex-direction: column;
    gap: 25px;
    justify-content: center;
    align-items: center;
    padding: 15px 10%;
    width: 100%;
  }
`;
export const InpultSearch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 365px;
  height: 60px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  gap: 15px;

  input {
    width: 100%;
    height: 55px;
    font-weight: 400;
    font-size: 1rem;
    padding-left: 20px;
    border: none;
    outline: none;
    background-color: transparent;
  }

  button {
    width: 107px;
    height: 40px;
    border: none;
    border-radius: 8px;
    background-color: #27ae60;
    color: white;
    font-weight: 500;
    font-size: 0.875rem;
    cursor: pointer;
    padding: 0px 20px;
    margin-right: 10px;
  }
  @media(max-width: 800px){
    max-width: 100%;
  }
`;
