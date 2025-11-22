
import React from "react";

function Student(props) {
  return (
    <div>
      <h2>Student Name: {props.name}</h2>
      <p>Age: {props.age}</p>
    </div>
  );
}

export default Student;


// import React from "react";
// import Student from "./components/Student";

// function App() {
//   return (
//     <div>
//       <h1>React Props Example</h1>

//       <Student name="Mohil" age="21" />
//       <Student name="Daksh" age="22" />
//       <Student name="Priya" age="20" />
//     </div>
//   );
// }

// export default App;

