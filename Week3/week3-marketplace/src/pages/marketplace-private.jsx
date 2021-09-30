import * as React from "react";
import { useAuth, LogoutButton } from "domains/auth";
import { ListingItem, ListingCart, useListings, addToCart, useCart, removeFromCart } from "domains/marketplace";
import { ShoppingBagIcon } from '@heroicons/react/solid';

const formatPrice = (price) => {
  if (price % 1 !== 0)
    price = (Math.round(price * 100) / 100).toFixed(2)
  return price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

export const MarketplacePrivate = () => {
  const auth = useAuth();

  const { listings } = useListings();
  const { cart, loadCart } = useCart(auth.accessToken);

  let cartTotal = 0;

  return (
    <div className="bg-gray-50 lg:flex">
      <div className="flex-1">
        <div className="max-w-7xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:flex-col sm:align-center mb-12">
            <h1 className="text-5xl font-extrabold text-gray-900 sm:text-center">
              Marketplace
            </h1>
          </div>
          <div className="grid md:grid-cols-3 gap-x-4 gap-y-8 xl:grid-cols-3 xl:gap-x-6">
            {listings &&
              listings.map((item) => (
                <ListingItem
                  imageUrl={item.imageUrl}
                  title={item.title}
                  description={item.description}
                  price={formatPrice(item.price)}
                  availableStock={item.numOfStock}
                  onlyOne={item.availability === "single-item"}
                  onAddToCart={
                    auth.status === "authenticated"
                      ? () => addToCart(item._id, auth.accessToken).then(() => loadCart(auth.accessToken))
                      : null
                  }
                  key={item._id}
                />
              ))}
          </div>
        </div>
      </div>
      <div className="flex-initial bg-white w-full lg:max-w-md border-b border-gray-100">
        <div className="flex flex-col h-full">
          <div className="py-6 px-4 bg-pink-700 sm:px-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium text-white">Your shopping cart</h2>
            </div>
            <div className="mt-1">
              <p className="text-sm text-pink-300">
                Listing added into your shopping cart
              </p>
            </div>
          </div>
          <div>
            <ul id="cart-item-list" className="divide-y divide-gray-200">
            {
              cart && cart.length === 0 ? (
                <div class="px-4 sm:px-6 pb-12">
                  <div class="pt-6 pb-5">
                    <div id="no-cart-item-message">
                      <div class="p-4 text-center">
                        <ShoppingBagIcon 
                          className="inline-block w-12 h-12 text-gray-300"
                        />
                      </div>
                      <p class="text-center text-gray-500">
                        There is no item in your shopping cart.
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                (cart && cart.map((item) => (
                    <ListingCart 
                      imageUrl={item.listing.imageUrl}
                      title={item.listing.title}
                      price={"$" + formatPrice(item.listing.price)}
                      quantity={item.quantity}
                      removeFromCart={
                        auth.status === "authenticated"
                          ? () => removeFromCart(item.listing._id, auth.accessToken).then(() => loadCart(auth.accessToken))
                          : null
                      }
                      key={item._id}
                    />
                  ))
                )
              )}
            </ul>
          </div>
          <div className="flex-shrink-0 px-4 py-4 flex justify-end border-t border-gray-200">
            <span>
              Total 
                <span className="text-3xl">$
                  <span>
                  {cart &&
                    cart.map((item) => (cartTotal += item.listing.price)) &&
                    formatPrice(cartTotal)}
                  </span>
                </span>
            </span>
          </div>
          <LogoutButton />
        </div>
      </div>
    </div>

  );
};
