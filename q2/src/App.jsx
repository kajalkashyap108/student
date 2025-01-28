// src/App.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const limit = 5; // Number of items per page
  const apiUrl = `https://jsonplaceholder.typicode.com/posts`;

  const fetchData = async (page) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get(apiUrl, {
        params: {
          _limit: limit,
          _page: page,
        },
      });
      setData(response.data);
    } catch (err) {
      setError("Failed to fetch data. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Paginated Data</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <ul className="mb-4">
          {data.map((item) => (
            <li key={item.id} className="p-2 border-b">
              {item.title}
            </li>
          ))}
        </ul>
      )}
      <div className="flex gap-4">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span>Page {currentPage}</span>
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;


