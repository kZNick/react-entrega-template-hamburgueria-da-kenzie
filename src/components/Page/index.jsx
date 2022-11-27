import React, { useEffect, useState } from "react";
import { Header, InpultSearch } from "../Styles/header";
import logo from "../../assets/logo.svg";
import { Main } from "../Styles/ProductsList";

import { apiBuguer } from "../services/api";
import { ListProducs, ListProducsFilter } from "../ProductsList/ProductsList";
import { Carts, EmptyCart } from "../Carts/carts";
import { toast } from "react-toastify";

export const Buguer = () => {
  const [burguerProducts, setBurguerProducts] = useState([]);
  const [burguerCart, setBurguerCart] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const listBurguer = async () => {
      try {
        const response = await apiBuguer.get("products");
        setBurguerProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    listBurguer();
  }, []);

  const createCart = (id, img, name, price, category) => {
    const cart = {
      id: id,
      img: img,
      name: name,
      price: price,
      category: category,
    };
    let productInCart = false
    burguerCart.forEach((buguers) => {
      if(cart.id === buguers.id){
        return productInCart = true
      }else{
        productInCart = false
      }
    })
    if(productInCart === false){
      setBurguerCart((oldBurguerCart) => [...oldBurguerCart, cart]);
    }else{
      toast('🍔 O Produto já foi adicionado ao carrinho', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
  };

  const removeCart = (cart) => {
    const filtroLista = burguerCart.filter((elemet) => elemet !== cart);
    setBurguerCart(filtroLista);
  };

  const addingTotalCart = burguerCart.reduce(
    (cartValue, currentCartValue) => cartValue + currentCartValue.price,
    0
  );

  const filterSearch = burguerProducts.filter(
    (listFilter) =>
      listFilter.name.toLowerCase().includes(search.toLowerCase()) ||
      listFilter.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Header>
        <img src={logo} alt="" />
        <InpultSearch>
          <input
            type="search"
            placeholder="Digitar Pesquisa"
            onChange={(evente) => setSearch(evente.target.value)}
          />
          <button>Pesquisar</button>
        </InpultSearch>
      </Header>
      <Main>
        {search === "" ? (
          <ListProducs list={filterSearch} createCarts={createCart}></ListProducs>
        ) : (
          <ListProducsFilter list={filterSearch} createCarts={createCart} searchs={search} setsearchs={setSearch}></ListProducsFilter>
        )}
        {burguerCart.length > 0 ? (
          <Carts
            list={burguerCart}
            removeCarts={removeCart}
            setBurguerCarts={setBurguerCart}
            total={addingTotalCart}
          ></Carts>
        ) : (
          <EmptyCart></EmptyCart>
        )}
      </Main>
    </>
  );
};
