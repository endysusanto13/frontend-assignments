import * as React from "react";

const getFromCart = (token, signal) =>
  fetch("https://ecomm-service.herokuapp.com/marketplace/cart/items",{
    signal,
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    console.log(res.statusText);
    return [];
  });

export const removeFromCart = (listingId, token) =>
  fetch(`https://ecomm-service.herokuapp.com/marketplace/cart/items/${listingId}`, {
    method: "DELETE",
    body: JSON.stringify({
      listingId,
    }),
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    throw new Error(res.statusText);
  });


export const addToCart = (listingId, token) =>
  fetch("https://ecomm-service.herokuapp.com/marketplace/cart/items", {
    method: "POST",
    body: JSON.stringify({
      quantity: 1,
      listingId,
    }),
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    throw new Error(res.statusText);
  });

export const useCart = (token) => {
  const [cart, setCart] = React.useState(undefined);

  const loadCart = (token, signal) => 
    getFromCart(token, signal).then((data) => setCart(data));

  React.useEffect(() => {
    const ab = new AbortController();
    loadCart(token, ab.signal);
    return () => {
      ab.abort();
    };
  }, [token]);

  return {
    cart,
    loadCart
  };
};