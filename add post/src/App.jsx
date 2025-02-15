import React, { useState } from "react";

const App = () => {
  const [name, Setname] = useState("");
  const [price, Setprice] = useState("");
  const [array, Setarray] = useState([]);

  const show = (e) => {
    e.preventDefault();
    alert("Form submitted");
    Setarray([...array, { name, price }]);
    Setname("");
    Setprice("");
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-5">
      {/* Form */}
      <form
        onSubmit={show}
        className="flex flex-col items-center bg-white w-[300px] p-5 rounded-lg shadow-lg space-y-4"
      >
        <h2 className="text-xl font-semibold text-gray-700">Add Product</h2>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
          placeholder="Enter name"
          value={name}
          onChange={(e) => Setname(e.target.value)}
        />
        <input
          type="number"
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
          placeholder="Enter price"
          value={price}
          onChange={(e) => Setprice(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 active:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>

      {/* Display List */}
      <div className="mt-10 w-[300px] space-y-3">
        {array.map((val, index) => (
          <div
            key={index}
            className="bg-white p-3 rounded-lg shadow-md flex justify-between items-center"
          >
            <p className="text-gray-800 font-medium">{val.name}</p>
            <p className="text-gray-600">${val.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
