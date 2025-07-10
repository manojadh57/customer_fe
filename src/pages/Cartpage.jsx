import React from 'react';

function Cartpage() {
  return <h1>Welcome to the E-Commerce Cart Page</h1>;
}

export default Cartpage;


// import React, { useState } from 'react';
// import CartItem from '../components/CartItem';
// import OrderSummary from '../components/OrderSummary';

// const initialCart = [
//   { id: 1, name: 'iPhone 14', price: 999, image: 'https://via.placeholder.com/150', quantity: 1 },
//   { id: 2, name: 'Galaxy S23', price: 899, image: 'https://via.placeholder.com/150', quantity: 2 },
// ];

// function CartPage() {
//   const [cartItems, setCartItems] = useState(initialCart);

//   const handleQuantityChange = (id, quantity) => {
//     setCartItems(prev =>
//       prev.map(item => (item.id === id ? { ...item, quantity } : item))
//     );
//   };

//   const handleRemove = (id) => {
//     setCartItems(prev => prev.filter(item => item.id !== id));
//   };

//   return (
//     <div className="container my-4">
//       <h2>Your Cart</h2>
//       <div className="row">
//         <div className="col-md-8">
//           {cartItems.length === 0 ? (
//             <p>Your cart is empty.</p>
//           ) : (
//             cartItems.map(item => (
//               <CartItem
//                 key={item.id}
//                 item={item}
//                 onQuantityChange={handleQuantityChange}
//                 onRemove={handleRemove}
//               />
//             ))
//           )}
//         </div>
//         <div className="col-md-4">
//           <OrderSummary items={cartItems} />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CartPage;
