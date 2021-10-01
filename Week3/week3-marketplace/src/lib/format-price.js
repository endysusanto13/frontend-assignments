export const formatPrice = (price) => {
  if (price % 1 !== 0)
    price = (Math.round(price * 100) / 100).toFixed(2)
  return price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}