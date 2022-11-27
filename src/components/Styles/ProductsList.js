import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
  margin-top: 35px;
  @media(max-width: 800px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 25px;
    width: 100%;
    padding-left: 20px;
  }
`;

export const DivProductsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 61.5%;
  max-width: 100%;
  flex-wrap: wrap;
  .listSearch {
    display: flex;
    justify-content: space-between;
    max-width: 100%;
    h2 {
      font-weight: 700;
      font-size: 1.625rem;
      color: #333333;
      span {
        font-weight: 700;
        font-size: 1.625rem;
        color: #828282;
      }
    }
    button {
        font-family: "Inter", sans-serif;
        font-weight: 500;
        font-size: 0.875rem;
        border: 2px solid #27ae60;
        border-radius: 8px;
        background-color: #27AE60;
        color: white;
        padding: 0px 20px;
        cursor: pointer;
      }
  }
  @media(max-width: 800px){
    width: 100%;
  }
`;
export const ProductsList = styled.ul`
  display: flex;
  width: 940px;
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  @media(max-width: 800px){
    display: flex;
    flex-wrap: nowrap;
    overflow-x: scroll;
    width: 100%;
  }
`;

export const Product = styled.li`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 300px;
  height: 346px;
  border: 2px solid #e0e0e0;
  border-radius: 5px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 150px;
    background-color: #f5f5f5;
  }
  img {
    width: 162px;
    height: 162px;
    object-fit: cover;
  }
  h3 {
    display: flex;
    padding-left: 20px;
    font-weight: 700;
    font-size: 1.125rem;
    color: #333333;
  }
  span {
    display: flex;
    padding-left: 20px;
    font-weight: 400;
    font-size: 0.75rem;
  }
  .productPrice {
    font-weight: 600;
    font-size: 1rem;
    color: #27ae60;
  }
  button {
    margin-left: 20px;
    width: 106px;
    height: 40px;
    padding: 0px 20px;
    border: none;
    border-radius: 8px;
    background-color: #27ae60;
    color: white;
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 0.875rem;
    cursor: pointer;
  }
`;
