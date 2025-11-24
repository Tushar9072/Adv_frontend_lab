import React from "react";

function FacultyList() {
  const faculties = ["Prof. Arjun Bala ", "Prof. Samir Kariya", "Prof. Dharmik Aghera", "Prof. Dharmik Vasiyani"];

  return (
    <div>
      <h2>Faculty List</h2>
      <ul>
        {faculties.map((faculty, index) => (
          <li key={index}>{faculty}</li>
        ))}
      </ul>
    </div>
  );
}

export default FacultyList;
