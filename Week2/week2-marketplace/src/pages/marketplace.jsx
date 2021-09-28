import React, { useState, useEffect, useRef } from "react";
import { ListingItem } from '../components/listing-item';

const getListings = (page, limit, signal) => 
  fetch(`https://ecomm-service.herokuapp.com/marketplace?page=${page}&limit=${limit}`, {
    signal,
  }).then((res) => res.json());

const createListing = (data) => 
  fetch("https://ecomm-service.herokuapp.com/marketplace", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());

const getListingInfo = (id) => 
  fetch(`https://ecomm-service.herokuapp.com/marketplace/${id}`)
    .then((res) => res.json());

const patchListing = (data, id) => 
  fetch(`https://ecomm-service.herokuapp.com/marketplace/${id}`, {
    method: "PATCH",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());

const usePersistedState = (storageKey, defaultValue) => {
  const [value, setValue] = useState(
    () => sessionStorage.getItem(storageKey) || defaultValue
  );

  useEffect(() => {
    sessionStorage.setItem(storageKey, value);
  }, [value, storageKey]);

  return [value, setValue];
};

export const Marketplace = () => {
  const [listings, setListings] = useState(undefined);
  const [isEditing, setIsEditing] = useState(false);
  const [id, setID] = useState("");

  const [title, setTitle] = usePersistedState("title", "");
  const [price, setPrice] = usePersistedState("price", "");
  const [description, setDescription] = usePersistedState("description", "");
  const [condition, setCondition] = usePersistedState("condition", "new");
  const [availability, setAvailability] = usePersistedState("availability", "in-stock");
  const [numOfStock, setNumOfStock] = usePersistedState("numOfStock", "");

  const titleInputRef = useRef();

  let page = 1;
  let limit = 7;

  const loadListings = (page, limit, signal) => 
    getListings(page, limit, signal)
      .then((data) => setListings(data))
      .catch((err) => {
        if (err.name !== "AbortError") {
          throw err;
        }
      });
      
  useEffect(() => {
    const ab = new AbortController();
    loadListings(page, limit, ab.signal);
    return () => {
      ab.abort();
    };
  }, [page, limit]);

  const resetForm = () => {
    setTitle("");
    setPrice("");
    setDescription("");
    setCondition("new");
    setAvailability("in-stock");
    setNumOfStock("")
  }

  const deleteListing = (id) => 
    fetch(`https://ecomm-service.herokuapp.com/marketplace/${id}`, {
      method: "DELETE"
    }).then(() => loadListings(page,limit))

  const enterEditMode = (id) => {
    setID(id);
    getListingInfo(id)
      .then((data) => {
        setTitle(data.title);
        setPrice(String(data.price));
        setDescription(data.description);
        setCondition(data.condition);
        setAvailability(data.availability);
        setNumOfStock(String(data.numOfStock));
      })
      .catch((err) => {throw err})
  };

  return (
    <main className="bg-gray-50 lg:flex">
      <div className="flex-1">
      {/* Left Side Div */}
        <div className="max-w-7xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:flex-col sm:align-center mb-12">
            <h1 className="text-5xl font-extrabold text-gray-900 sm:text-center">
              Marketplace
            </h1>
          </div>
          <div className=" grid md:grid-cols-2 gap-x-4 gap-y-8 xl:grid-cols-3 xl:gap-x-6">
            {listings && 
              listings.map((item, index) => (
              <ListingItem
                imageUrl={item.imageUrl}
                title={item.title}
                description={item.description}
                price={item.price}
                availableStock={item.numOfStock}
                onlyOne={item.availability === "single-item"}
                id={item._id}
                key={item._id}
                deleteListing={deleteListing}
                enterEditMode={enterEditMode}
                isEditing={isEditing}
                setIsEditing={setIsEditing}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Right Side Div */}
      <div className="flex-initial bg-white w-full lg:max-w-md border-b border-gray-100">
        <form 
          className="flex flex-col h-full"
          onSubmit={(ev) => {
          ev.preventDefault();
          createListing({
            title,
            price: Number(price),
            description,
            condition,
            availability,
            numOfStock: Number(numOfStock),
          }).then(() => {
            loadListings(page, limit);
            resetForm();

            if (titleInputRef.current) {
              titleInputRef.current.focus();
            }
          });
        }}
        >
          {/* Form Header */}
          <div className="py-6 px-4 bg-pink-700 sm:px-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium text-white">
                New Listing
              </h2>
            </div>
            <div className="mt-1">
              <p className="text-sm text-pink-300">
                Get started by filling in the information below to create your new listing.
              </p>
            </div>
          </div>

          {/* Inputs */}
          <div className="px-4 sm:px-6 pb-12">
            <div className="space-y-6 pt-6 pb-5">
              <div>
                <label 
                  htmlFor="listing-title" 
                  className="block text-sm font-medium text-gray-900"
                >
                  Title
                </label>
                <div className="mt-1">
                  <input 
                    type="text" 
                    name="listing-title" 
                    id="listing-title"
                    value={title}
                    onChange={(ev) => setTitle(ev.target.value)}
                    required="" 
                    ref={titleInputRef}
                    className="block w-full shadow-sm sm:text-sm focus:ring-pink-500 focus:border-pink-500 border-gray-300 rounded-md"
                    />
                </div>
              </div>
              <div>
                <label 
                  htmlFor="listing-price" 
                  className="block text-sm font-medium text-gray-900"
                >
                  Price
                </label>
                <div className="mt-1">
                  <input 
                    type="number" 
                    name="listing-price" 
                    id="listing-price" 
                    value={price}
                    onChange={(ev) => setPrice(ev.target.value)}
                    required="" 
                    className="block w-full shadow-sm sm:text-sm focus:ring-pink-500 focus:border-pink-500 border-gray-300 rounded-md"
                    />
                </div>
              </div>
              <div>
                <label 
                  htmlFor="description" 
                  className="block text-sm font-medium text-gray-900"
                >
                  Description
                </label>
                <div className="mt-1">
                  <textarea 
                  id="description" 
                  name="description" 
                  rows="4"
                  value={description}
                  onChange={(ev) => setDescription(ev.target.value)} 
                  required="" 
                  className="block w-full shadow-sm sm:text-sm focus:ring-pink-500 focus:border-pink-500 border border-gray-300 rounded-md">
                  </textarea>
                </div>
              </div>
              <div>
                <label 
                  htmlFor="listing-condition" 
                  className="block text-sm font-medium text-gray-900"
                >
                  Condition
                </label>
                <div className="mt-1">
                  <select 
                    id="listing-condition" 
                    name="listing-condition" 
                    value={condition}
                    onChange={(ev) => setCondition(ev.target.value)}
                    required="" 
                    className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm rounded-md"
                  >
                    <option value="new">New</option>
                    <option value="used_like-new">Used (like new)</option>
                    <option value="used_good">Used (good)</option>
                    <option value="used_fair">Used (fair)</option>
                  </select>
                </div>
              </div>
              <div>
                <label 
                  htmlFor="listing-availability" 
                  className="block text-sm font-medium text-gray-900">
                  Availability
                </label>
                <div className="mt-1">
                  <select 
                    id="listing-availability" 
                    name="listing-availability" 
                    value={availability}
                    onChange={(ev) => setAvailability(ev.target.value)}
                    required="" 
                    className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm rounded-md"
                  >
                    <option value="in-stock">In Stock</option>
                    <option value="single-item">Single Item</option>
                  </select>
                </div>
              </div>
              <div>
                <label 
                  htmlFor="num-of-stock" 
                  className="block text-sm font-medium text-gray-900">
                  Number of Available Stock
                </label>
                <div className="mt-1">
                  <input 
                    type="number" 
                    name="num-of-stock" 
                    id="num-of-stock" 
                    value={numOfStock}
                    onChange={(ev) => setNumOfStock(ev.target.value)}
                    required="" 
                    className="block w-full shadow-sm sm:text-sm focus:ring-pink-500 focus:border-pink-500 border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Submit Button */}
            {isEditing ? (
              <div className="flex-shrink-0 px-4 py-4 flex justify-between border-t border-gray-200">
                <button 
                  type="button"
                  className="ml-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                  onClick={(ev) => {
                    ev.preventDefault();
                    setIsEditing(false);
                    resetForm();
                  }}
                >
                CANCEL
                </button>
                <button 
                  type="button"
                  className="ml-4 inline-flex justify-start py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                  onClick={(ev) => {
                    ev.preventDefault();
                    patchListing({
                      title,
                      price: Number(price),
                      description,
                      condition,
                      availability,
                      numOfStock: Number(numOfStock),
                      }, id)
                      .then(() => {
                      loadListings(page, limit);
                      resetForm();
                      setID("")
                      setIsEditing(false);

                      if (titleInputRef.current) {
                        titleInputRef.current.focus();
                      }
                    });
                  }}
                >
                EDIT
                </button>
              </div>
              ) : (
              <div className="flex-shrink-0 px-4 py-4 flex justify-end border-t border-gray-200">
                <button 
                  type="submit" 
                  className="ml-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
                  ADD
                </button>
              </div>
              )}
        </form>
      </div>
    </main>

  );
};