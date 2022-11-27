import styled from "styled-components";

export const Cart = styled.div`
  display: flex;
  flex-direction: column;
  width: 365px;
  min-width: 365px;
  max-width: 100%;
  max-height: 530px;
  background-color: #f5f5f5;
  border-radius: 5px;
  h2 {
    width: 100%;
    background-color: #27ae60;
    color: white;
    font-weight: 700;
    font-size: 18px;
    padding: 20px;
    border-radius: 5px 5px 0px 0px;
  }
`;
export const NoCart = styled.div`
  display: flex;
  flex-direction: column;
  width: 365px;
  height: 223px;
  max-width: 100%;
  h2 {
    width: 100%;
    background-color: #27ae60;
    color: white;
    font-weight: 700;
    font-size: 18px;
    padding: 20px;
    border-radius: 5px 5px 0px 0px;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 100%;
    height: 158px;
    background-color: #f5f5f5;
    border-radius: 0px 0px 5px 5px;
    h2 {
      font-weight: 700;
      font-size: 1.125rem;
      color: #333333;
    }
    span {
      font-weight: 400;
      font-size: 0.875rem;
      color: #828282;
    }
  }
`;
export const CartProducts = styled.ul`
  display: flex;
  width: 100%;
  height: 330px;
  flex-direction: column;
  list-style: none;
  gap: 15px;
  padding: 10px;
  overflow-y: auto;
`;
export const CartProduct = styled.li`
  display: flex;
  margin-top: 5px;

  .CartImg {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #e0e0e0;
    border-radius: 5px;
    width: 80px;
    height: 80xp;
    img {
      width: 70px;
      height: 70px;
    }
  }

  .CartInf {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-left: 10px;
    margin-top: 5px;
    h3 {
      font-weight: 700;
      font-size: 0.875rem;
      color: #333333;
    }
    span {
      font-weight: 400;
      font-size: 0.75rem;
      color: #828282;
    }
  }

  button {
    display: flex;
    height: 15px;
    background-color: transparent;
    margin-left: 100px;
    font-weight: 500;
    font-size: 12px;
    border: none;
    cursor: pointer;
    color: #bdbdbd;
    margin-top: 5px;
  }
`;