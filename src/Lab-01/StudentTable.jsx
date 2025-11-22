
import React from "react";

function StudentTable() {
  const students = [
    { id: 1, name: "Mohil", age: 21 },
    { id: 2, name: "Tushar", age: 22 },
    { id: 3, name: "Devang", age: 20 },
    { id: 4, name: "Rohan", age: 23 }
  ];

  return (
    <div>
      <h2>Student List Using map()</h2>

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>

        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;
