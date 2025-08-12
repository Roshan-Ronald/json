import React from 'react';

const Arre = () => {
  const greeting = "Hello, welcome to Arre component!";
  const year = 2025;
  const isActive = true;
  const users = [
    { id: 1, name: 'Sahaya', age: 30, active: true },
    { id: 2, name: 'Roshan', age: 25, active: true },
    { id: 3, name: 'Ronald', age: 35, active: true },
  ]; 

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4 text-center">{greeting}</h1>
      <p className="text-gray-700 mb-2 text-center">The current year is: <span className="font-semibold">{year}</span></p>
      <p className={`mb-6 text-center font-semibold ${isActive ? 'text-green-600' : 'text-red-600'}`}>
        Status: {isActive ? "Active" : "Inactive"}
      </p>

      <h2 className="text-2xl font-semibold mb-3 border-b border-gray-300 pb-2">Users List:</h2>
      <ul className="space-y-3">
        {users.map(user => (
          <li key={user.id} className="p-3 border border-gray-200 rounded-md shadow-sm flex justify-between items-center">
            <span className="text-lg font-medium">{user.name} (Age: {user.age})</span>
            <span className={`font-semibold ${user.active ? 'text-green-500' : 'text-red-500'}`}>
              {user.active ? 'Active' : 'Not active'}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Arre;
