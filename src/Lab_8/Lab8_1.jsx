import React from "react";

const Lab8_1 = () => {
  return (
    <div className="p-4">
      <table className="min-w-full border text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-3 py-2 text-left">Name</th>
            <th className="border px-3 py-2 text-left">Role</th>
            <th className="border px-3 py-2 text-left">Email</th>
          </tr>
        </thead>
        <tbody>
          {["Alice", "Bob", "Charlie"].map((name, i) => (
            <tr key={name} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
              <td className="border px-3 py-2">{name}</td>
              <td className="border px-3 py-2">Student</td>
              <td className="border px-3 py-2">{name.toLowerCase()}@lab.com</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Lab8_1;
