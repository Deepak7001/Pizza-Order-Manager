import React, { useState } from 'react';
import axios from 'axios';

function Order() {
  const [orderid, setOrderID] = useState('');
  const [pizzatype, setPizzaType] = useState('Small');
  const [quantity, setQuantity] = useState('');
  const [address, setAddress] = useState('');
  const [status, setStatus] = useState('');
  const [totalprice, setTotalPrice] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const orderData = {
        orderid,
        pizzatype,
        quantity,
        address,
        status,
        totalprice,
      };

      const response = await axios.post('http://localhost:2000/saveOrder', orderData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Handle successful order submission
      console.log('Order submitted successfully:', response.data);
      if (response.data) {
        console.log(response.data);
      }
    } catch (error) {
      // Handle error
      console.error('Order submission failed:', error.message);
    }
  };

  const updateTotalPrice = () => {
    const calculatedTotalPrice = Number(quantity) * 10; // Adjust the calculation as per your requirements
    setTotalPrice(calculatedTotalPrice);
  };

  return (
    <div className="container mx-auto mt-10">
      <form className="bg-white p-8 rounded shadow-md" onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="orderid" className="block text-gray-600 text-sm font-medium mb-2">
            Order ID:
          </label>
          <input
            type="text"
            id="orderid"
            className="form-input w-full"
            value={orderid}
            onChange={(e) => setOrderID(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label htmlFor="pizzaType" className="block text-gray-600 text-sm font-medium mb-2">
            Pizza Type:
          </label>
          <select
            id="pizzaType"
            className="form-select w-full"
            value={pizzatype}
            onChange={(e) => setPizzaType(e.target.value)}
          >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>

        <div className="mb-6">
          <label htmlFor="quantity" className="block text-gray-600 text-sm font-medium mb-2">
            Quantity:
          </label>
          <input
            type="number"
            id="quantity"
            className="form-input w-full"
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
              updateTotalPrice();
            }}
          />
        </div>

        <div className="mb-6">
          <label htmlFor="address" className="block text-gray-600 text-sm font-medium mb-2">
            Address:
          </label>
          <textarea
            id="address"
            className="form-textarea w-full"
            rows="5"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <div id="price" className="mb-6 text-center font-bold">
          <label htmlFor="totalPrice" className="block text-gray-600 text-sm font-medium mb-2">
            Total Price:
          </label>
          <span id="totalPrice">${totalprice}</span>
        </div>

        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
          Submit Order
        </button>
      </form>
    </div>
  );
}

export default Order;
