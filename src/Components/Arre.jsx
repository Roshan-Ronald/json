import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

const Arre = () => {
  const navigate = useNavigate();

  const greeting = "Hello, welcome to Arre component!";
  const year = 2025;
  const isActive = true;

  const [movies, setMovies] = useState([
    { id: 1, title: "Baahubali: The Beginning (Tamil)", year: 2015, genre: "Action", rating: 8.1, available: true },
    { id: 2, title: "Vikram", year: 2022, genre: "Action", rating: 8.3, available: true },
    { id: 3, title: "Soorarai Pottru", year: 2020, genre: "Drama", rating: 8.7, available: true },
    { id: 4, title: "Kaithi", year: 2019, genre: "Thriller", rating: 8.4, available: false },
    { id: 5, title: "Jai Bhim", year: 2021, genre: "Legal Drama", rating: 8.8, available: true },
    { id: 6, title: "Master", year: 2021, genre: "Action", rating: 7.3, available: true },
    { id: 7, title: "Ponniyin Selvan: I", year: 2022, genre: "Historical", rating: 7.6, available: true },
    { id: 8, title: "Maanagaram", year: 2017, genre: "Thriller", rating: 8.1, available: true },
    { id: 9, title: "96", year: 2018, genre: "Romance", rating: 8.5, available: false },
    { id: 10, title: "Vada Chennai", year: 2018, genre: "Crime", rating: 8.4, available: true },
    { id: 11, title: "Asuran", year: 2019, genre: "Action Drama", rating: 8.4, available: true },
    { id: 12, title: "Maanaadu", year: 2021, genre: "Sci-Fi Thriller", rating: 8.1, available: true },
    { id: 13, title: "Karnan", year: 2021, genre: "Drama", rating: 8.2, available: true },
    { id: 14, title: "Thuppakki", year: 2012, genre: "Action", rating: 7.5, available: true },
    { id: 15, title: "Anniyan", year: 2005, genre: "Action Thriller", rating: 8.2, available: true },
    { id: 16, title: "Sethupathi", year: 2016, genre: "Action", rating: 7.9, available: true },
    { id: 17, title: "Kavalan", year: 2011, genre: "Romantic Comedy", rating: 7.0, available: true },
    { id: 18, title: "Thani Oruvan", year: 2015, genre: "Action Thriller", rating: 8.4, available: true },
    { id: 19, title: "Naan Kadavul", year: 2009, genre: "Drama", rating: 8.1, available: true },
    { id: 20, title: "Aayirathil Oruvan", year: 2010, genre: "Adventure", rating: 7.9, available: true },
  ]);

  const handleDelete = id => setMovies(prev => prev.filter(m => m.id !== id));

  const toggleAvailable = id =>
    setMovies(prev => prev.map(m => (m.id === id ? { ...m, available: !m.available } : m)));

  return (
    <div className="w-full max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-end mb-4">
        <button
          onClick={() => navigate("/add-movie")}
          className="flex items-center px-5 py-5 bg-green-400 text-white rounded-full hover:bg-red-600 transition cursor-pointer"
        >
          <FaPlus className="" />
        </button>
      </div>
      <h1 className="text-3xl font-bold mb-4 text-center">{greeting}</h1>
      <p className="text-gray-700 mb-2 text-center">
        The current year is: <span className="font-semibold">{year}</span>
      </p>
      <p className={`mb-6 text-center font-semibold ${isActive ? "text-green-600" : "text-red-600"}`}>
        Status: {isActive ? "Active" : "Inactive"}
      </p>
      <h2 className="text-2xl font-semibold mb-3 border-b border-gray-300 pb-2">Tamil Movies List</h2>
      <ul className="space-y-3">
        {movies.map(movie => (
          <li key={movie.id} className="p-3 border border-gray-200 rounded-md shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <span className="text-lg font-medium">
                  {movie.title} ({movie.year}) — {movie.genre}
                </span>
                <div className="text-sm text-gray-600">Rating: {movie.rating.toFixed(1)} ⭐</div>
              </div>
              <div className="flex items-center gap-2">
                <span className={`text-sm font-semibold ${movie.available ? "text-green-600" : "text-red-600"}`}>
                  {movie.available ? "Available" : "Unavailable"}
                </span>
                <button
                  onClick={() => toggleAvailable(movie.id)}
                  className="px-3 py-1 text-xs bg-yellow-100 text-yellow-800 rounded hover:bg-yellow-200"
                >
                  Toggle
                </button>
                <button
                  onClick={() => handleDelete(movie.id)}
                  className="px-3 py-1 text-xs bg-rose-100 text-rose-800 rounded hover:bg-rose-200"
                >
                  Delete
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Arre;
