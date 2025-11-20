// import React, { useMemo, useState, useDeferredValue } from "react";

// function generateItems(n = 20000) {
//   const items = new Array(n);
//   for (let i = 0; i < n; i++) {
//     items[i] = {
//       id: i + 1,
//       text: `Item ${i + 1} — ${
//         ["apple", "banana", "cherry", "date", "elderberry"][i % 5]
//       } #${Math.floor(i / 5)}`,
//     };
//   }
//   return items;
// }

// function expensiveMatch(itemText, query) {
//   let cost = 0;
//   for (let i = 0; i < 120; i++) {
//     cost += (i * 31 + itemText.length) % (query.length + 1 || 1);
//   }

//   return itemText.toLowerCase().includes(query.toLowerCase());
// }

// export default function SearchList() {
//   const [query, setQuery] = useState("");
//   const deferredQuery = useDeferredValue(query);

//   const items = useMemo(() => generateItems(20000), []);

//   const filtered = useMemo(() => {
//     if (!deferredQuery) return items;
//     const q = deferredQuery.trim();
//     return items.filter((it) => expensiveMatch(it.text, q));
//   }, [items, deferredQuery]);

//   const isPending = query !== deferredQuery;

//   return (
//     <div className="min-h-screen flex items-start justify-center bg-gray-50 p-6">
//       <div className="w-full max-w-3xl bg-white rounded-xl shadow-md p-6">
//         <h1 className="text-2xl font-semibold mb-4">
//           Slow Searching List (deferred)
//         </h1>

//         <div className="flex items-center gap-3 mb-4">
//           <input
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             placeholder="Type to search... (try 'apple' or 'banana')"
//             className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             aria-label="Search items"
//           />

//           <div className="text-sm text-gray-600">
//             {isPending ? (
//               <span className="inline-flex items-center gap-2">
//                 <svg
//                   className="w-4 h-4 animate-spin"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                 >
//                   <circle
//                     cx="12"
//                     cy="12"
//                     r="10"
//                     stroke="currentColor"
//                     strokeWidth="3"
//                     className="opacity-25"
//                   />
//                   <path
//                     d="M4 12a8 8 0 018-8"
//                     stroke="currentColor"
//                     strokeWidth="3"
//                     className="opacity-75"
//                   />
//                 </svg>
//                 updating...
//               </span>
//             ) : (
//               <span className="text-sm text-green-600">updated</span>
//             )}
//           </div>
//         </div>

//         <div className="mb-2 text-sm text-gray-500">
//           Showing <span className="font-medium">{filtered.length}</span> of{" "}
//           <span className="font-medium">{items.length}</span> items
//         </div>

//         <div className="h-[60vh] overflow-auto border rounded-md">
//           <ul className="divide-y">
//             {filtered.map((it) => (
//               <li key={it.id} className="p-3 hover:bg-gray-50">
//                 <div className="text-sm font-medium text-gray-800">
//                   {it.text}
//                 </div>
//                 <div className="text-xs text-gray-500">ID: {it.id}</div>
//               </li>
//             ))}
//             {filtered.length === 0 && (
//               <li className="p-6 text-center text-gray-500">No results</li>
//             )}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }


import { useDeferredValue, useEffect, useState } from "react";

function SearchStudent() {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");

  const deferredSearchText = useDeferredValue(searchText);

  useEffect(() => {
    let formattedData = [];

    // simulate heavy work
    for (let i = 0; i < 10000; i++) {
      formattedData.push(deferredSearchText);
    }

    setData(formattedData);
  }, [deferredSearchText]);

  return (
    <>
      <input
        type="text"
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search..."
      />

      <ul className={"ml-5"}>
        {data.map((d, i) => (
          <li key={i}>{i} {d}</li>
        ))}
      </ul>
    </>
  );
}

export default SearchStudent;

