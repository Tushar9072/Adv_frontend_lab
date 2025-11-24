import React from "react";

function StudentList() {
  const students = ["Drashti", "Pratham", "Tirth", "Devkaran", "Yash"];

  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.map((student, index) => (
          <li key={index}>{student}</li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;
