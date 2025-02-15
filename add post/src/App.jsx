import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [array, setArray] = useState([]);

  const show = (e) => {
    e.preventDefault();
    setArray([...array, { name, price, image }]);
    setName("");
    setPrice("");
    setImage("");
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-blue-50 to-gray-200 p-6">
      {/* Form */}
      <form
        onSubmit={show}
        className="flex flex-col items-center bg-white w-[350px] p-6 rounded-xl shadow-xl space-y-5 border border-gray-200"
      >
        <h2 className="text-2xl font-semibold text-gray-700">Add Product</h2>
        <input
          type="text"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          placeholder="Enter price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="text"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          placeholder="Enter image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 active:bg-blue-700 transition font-semibold"
        >
          Submit
        </button>
      </form>

      {/* Display List */}
      <div className="mt-10 w-[100%] space-x-4 space-y-4 justify-center h-auto flex flex-wrap ">
        {array.map((val, index) => (
          <div
            key={index}
            className="bg-white w-[30%] p-4 rounded-xl shadow-md flex flex-col items-center space-x-4 border border-gray-200"
          >
            <img src={val.image} alt="product" className="w-[100%] h-auto object-cover rounded-lg" />
            <div className="flex flex-col">
              <p className="text-gray-800 font-semibold text-3xl">{val.name}</p>
              <p className="text-gray-600 font-medium text-3xl">${val.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
