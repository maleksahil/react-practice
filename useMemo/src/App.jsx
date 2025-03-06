import React, { useState, useMemo } from "react";

// 📌 Expensive function: Finds prime numbers up to the given number
const findPrimes = (num) => {
  console.log("Calculating primes..."); // To show when it re-runs
  let primes = [];
  for (let i = 2; i <= num; i++) {
    if (primes.every((prime) => i % prime !== 0)) {
      primes.push(i);
    }
  }
  return primes;
};

const App = () => {
  const [number, setNumber] = useState(10);
  const [count, setCount] = useState(0);

  // ❌ Without useMemo (Recalculates on every render)
  // const primes = findPrimes(number); 

  // ✅ With useMemo (Only recalculates when 'number' changes)
  const primes = useMemo(() => findPrimes(number), [number]);

  return (

    <div style={{ textAlign: "center", padding: "20px" }}>

      <h1>🔢 Prime Number Finder</h1>

      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
        style={{ padding: "10px", fontSize: "16px" }}
      />

      <h3>Prime Numbers: {primes.join(", ")}</h3>

      <button onClick={() => setCount(count + 1)} style={{ padding: "10px", marginTop: "10px" }}>
        Click Me ({count})
      </button>
      
      <p>👆 Click counter updates **without** recalculating primes!</p>
    </div>
  );
};

export default App;
