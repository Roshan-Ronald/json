import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddMoviePage = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    year: "",
    genre: "",
    rating: "",
    available: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validate = () => {
    if (!form.title.trim()) return "Title is required";
    const y = Number(form.year);
    if (!y || y < 1930 || y > 2100) return "Year must be between 1930 and 2100";
    if (!form.genre.trim()) return "Genre is required";
    const r = Number(form.rating);
    if (isNaN(r) || r < 0 || r > 10)
      return "Rating must be between 0 and 10";
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    if (err) {
      alert(err);
      return;
    }
    alert("Movie added successfully!");
    navigate("/"); 
  };

  return (
    <div className="w-full max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-3 border-b pb-2">
        Add Tamil Movie
      </h2>
      <form onSubmit={handleSubmit}>
        {["title", "year", "genre", "rating"].map((field) => (
          <div key={field} className="mb-4">
            <label
              htmlFor={field}
              className="block text-sm font-medium mb-1 capitalize"
            >
              {field === "rating" ? "Rating (0-10)" : field}
            </label>
            <input
              id={field}
              name={field}
              type={field === "year" || field === "rating" ? "number" : "text"}
              value={form[field]}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 focus:outline-none h-12"
            />
          </div>
        ))}
        <div className="flex items-center mb-4">
          <input
            id="available"
            name="available"
            type="checkbox"
            checked={form.available}
            onChange={handleChange}
            className="h-4 w-4"
          />
          <label htmlFor="available" className="ml-2 text-sm font-medium">
            Available
          </label>
        </div>
        <div className="flex justify-between">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
          >
            Add Movie
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddMoviePage;
