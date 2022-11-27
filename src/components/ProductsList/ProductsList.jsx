import React from "react";
import { DivProductsList, Product, ProductsList } from "../Styles/ProductsList";

export const ListProducs = ({ list, createCarts }) => {
  return (
    <ProductsList>
      {list.map((element, index) => {
        return (
          <Product key={index}>
            <div>
              <img src={element.img} alt="" />
            </div>
            <h3>{element.name}</h3>
            <span>{element.category}</span>
            <span className="productPrice">
              {element.price.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
            <button
              onClick={() => {
                createCarts(
                  element.id,
                  element.img,
                  element.name,
                  element.price,
                  element.category
                );
              }}
            >
              Adicionar
            </button>
          </Product>
        );
      })}
    </ProductsList>
  );
};

export const ListProducsFilter = ({ list, createCarts, searchs, setsearchs}) => {
  return (
    <DivProductsList>
      <div className="listSearch">
        <h2>
          Resultados para: <span>{searchs}</span>
        </h2>
        <button onClick={()=>setsearchs("")}>Limpar busca</button>
      </div>
      <ProductsList>
        {list.map((element, index) => {
          return (
            <Product key={index}>
              <div>
                <img src={element.img} alt="" />
              </div>
              <h3>{element.name}</h3>
              <span>{element.category}</span>
              <span className="productPrice">
                {element.price.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
              <button
                onClick={() => {
                  createCarts(
                    element.id,
                    element.img,
                    element.name,
                    element.price,
                    element.category
                  );
                }}
              >
                Adicionar
              </button>
            </Product>
          );
        })}
      </ProductsList>
    </DivProductsList>
  );
};
