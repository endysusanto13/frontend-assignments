```jsx
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
        <ListingCart
          title="Coca-cola"
          description="The classics never dies."
          price={2.5}
          quantity={3}
          imageUrl="https://images.unsplash.com/photo-1570831739435-6601aa3fa4fb?ixid=MnwyNDY1NjJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjYyNDYyMDc&ixlib=rb-1.2.1&auto=format&fit=crop&w=543&h=384&q=80"
          removeFromCart={() => alert("Item is removed from cart!")}
        />
        <ListingCart
          title="Stylish Shoe"
          description="For every occasons."
          price={600}
          quantity={1}
          imageUrl="https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixid=MnwyNDY1NjJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjYyNDYyMDc&ixlib=rb-1.2.1&auto=format&fit=crop&w=543&h=384&q=80"
          removeFromCart={() => alert("Item is removed from cart!")}
        />
        <ListingCart
          title="Cool Bag"
          description="Only for the cool kid."
          price={250}
          quantity={5}
          imageUrl="https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?ixid=MnwyNDY1NjJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjYyNDYyMDc&ixlib=rb-1.2.1&auto=format&fit=crop&w=543&h=384&q=80"
          removeFromCart={() => alert("Item is removed from cart!")}
        />
      </ul>
    </div>
  </div>
</div>
```
