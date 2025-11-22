import React from "react";

function Message(props) {
  return (
    <div>
      {props.isDisplay === true && (
        <h2>This message is visible because isDisplay = true</h2>
      )}
    </div>
  );
}

export default Message;




// import React from "react";
// import Message from "./components/Message";

// function App() {
//   return (
//     <div>
//       <h1>Conditional Rendering Example</h1>

//       {/* Will display the message */}
//       <Message isDisplay={true} />

//       {/* Will NOT display anything */}
//       <Message isDisplay={false} />
//     </div>
//   );
// }

// export default App;
