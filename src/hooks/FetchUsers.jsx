import React, { useEffect, useState } from "react";

export default function FetchUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Error fetching:", err));
  }, []); 

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-6">User List</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="p-4 border rounded-lg shadow bg-white"
          >
            <h2 className="text-lg font-semibold">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
