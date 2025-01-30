import React, { useState } from 'react';

const App = () => {
  // State for each input field
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // State for displaying submitted data
  const [submittedData, setSubmittedData] = useState(null);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();  // Prevent page refresh on form submit
    const userData = { name, email, password };
    setSubmittedData(userData);  // Set the submitted data to state
    // Optionally, reset the form fields
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">User Information</h1>

        {/* Form to input user details */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Submit
          </button>
        </form>

        {/* Display submitted data */}
        {submittedData && (
          <div className="mt-6 bg-gray-50 p-4 rounded-lg shadow-inner">
            <h2 className="text-xl font-semibold mb-2">Submitted Information:</h2>
            <p><strong>Name:</strong> {submittedData.name}</p>
            <p><strong>Email:</strong> {submittedData.email}</p>
            <p><strong>Password:</strong> {submittedData.password}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
