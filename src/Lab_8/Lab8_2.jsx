import React from "react";

const Lab8_2 = () => {
  return (
    <div className="p-4">
      <div className="overflow-x-auto">
        <table className="min-w-[600px] border text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-3 py-2">ID</th>
              <th className="border px-3 py-2">Name</th>
              <th className="border px-3 py-2">Status</th>
              <th className="border px-3 py-2">Created</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4].map((id) => (
              <tr key={id} className={id % 2 ? "bg-white" : "bg-gray-50"}>
                <td className="border px-3 py-2">{id}</td>
                <td className="border px-3 py-2">Item {id}</td>
                <td className="border px-3 py-2">Active</td>
                <td className="border px-3 py-2">2025-11-20</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-2 text-xs text-gray-500">
        On small screens, this table scrolls horizontally.
      </p>
    </div>
  );
};

export default Lab8_2;
