import * as React from "react";
import PropTypes from "prop-types";
import {
  TrashIcon
} from "@heroicons/react/solid";
import { formatPrice } from "lib/format-price";


export const ListingCart = (props) => {
  const [isDeleting, setIsDeleting] = React.useState(false);

  const deleteItem = () => {
    setIsDeleting(true)
    props.removeFromCart()
  }

  return (
    <li className="flex px-4 sm:px-6 py-4">
      <img 
        src={props.imageUrl}
        alt=""
        className="h-10 w-10 rounded-full" 
      />
      <div className="flex-1 flex justify-between items-center ml-3">
        <div>
          <p className="text-sm font-medium text-gray-900">
            {props.title}
          </p>
          <p className="text-sm text-gray-500">{props.price} x {props.quantity} pc</p>
        </div>
        <div className="flex items-center gap-2">
          <div>{props.price}</div>
          {isDeleting ? (
            <button 
              type="button" 
              className="text-red-400 p-1 rounded-full hover:bg-gray-50 focus:outline-none focus:bg-gray-50 focus:ring focus:ring-pink-500 focus:ring-opacity-30 transition duration-150 ease-in-out" 
              title="Remove item"
            >
              <TrashIcon 
                className="w-6 h-6 animate-pulse"
              />
            </button>
          ) : (
            <button 
              type="button" 
              className="text-red-400 p-1 rounded-full hover:bg-gray-50 focus:outline-none focus:bg-gray-50 focus:ring focus:ring-pink-500 focus:ring-opacity-30 transition duration-150 ease-in-out" 
              title="Remove item"
              onClick={deleteItem}
            >
              <TrashIcon 
                className="w-6 h-6"
              />
            </button>
          )}

        </div>
      </div>
    </li>
  );
};

ListingCart.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  /**
   * Quantity of items added to shopping cart, not available quantity.
   */
  quantity: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
};

