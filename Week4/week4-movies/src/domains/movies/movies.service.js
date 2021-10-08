import { fetchJson } from "lib/fetch-json";
import { BASE_URL } from "const";

let limit = 16

// export const addToCart = (listingId, token) =>
//   fetchJson(`${BASE_URL}/marketplace/cart/items`, {
//     method: "POST",
//     body: {
//       quantity: 1,
//       listingId,
//     },
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });

// export const getCartItems = ({ token, signal }) =>
//   fetchJson(`${BASE_URL}/marketplace/cart/items`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//     signal,
//   });

// export const deleteCartItem = (listingId, { token }) =>
//   fetchJson(`${BASE_URL}/marketplace/cart/items/${listingId}`, {
//     method: "DELETE",
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });

export const getMovieListings = (page, signal) =>
  fetchJson(`${BASE_URL}/movie?page=${page}&limit=${limit}`, {
    signal,
  });

export const getMovieDetails = (listingId, signal) =>
  fetchJson(`${BASE_URL}/movie/movie/${listingId}`, {
    signal,
  });