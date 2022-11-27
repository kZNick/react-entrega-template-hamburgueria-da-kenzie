import React from "react";
import { Cart, CartProduct, CartProducts, NoCart } from "../Styles/cart";
import { FullCard } from "../Styles/fullCart";

export const Carts = ({list, removeCarts, setBurguerCarts, total})=>{
    return(
        <Cart>
        <h2>Carrinho de compras</h2>
        <CartProducts>
          {list.map((element) => {
            return (
              <CartProduct key={element.id}>
                <div className="CartImg">
                  <img src={element.img} alt="" />
                </div>
                <div className="CartInf">
                  <h3>{element.name}</h3>
                  <span>{element.category}</span>
                </div>
                <button onClick={() => removeCarts(element)}>Remover</button>
              </CartProduct>
            );
          })}
        </CartProducts>
        <FullCard>
          <div>
            <h3>Total</h3>
            <span>{total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>
          </div>
          <button onClick={()=>setBurguerCarts([])}>Remover todos </button>
        </FullCard>
      </Cart>
    )
}

export const EmptyCart = ()=>{
    return (
        <NoCart>
            <h2>Carrinho de compras</h2>
            <div>
                <h3>Sua sacola está vazia</h3>
                <span>Adicione itens</span>
            </div>
        </NoCart>
    )
}