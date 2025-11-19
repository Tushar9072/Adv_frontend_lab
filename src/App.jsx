import AutoCounter from "./hooks/AutoCounter";
import DemoState from "./hooks/demoState";
import FetchUsers from "./hooks/FetchUsers";
import ChildA from "./hooks/hook_5/ChildA";
import ChildB from "./hooks/hook_5/ChildB";
import InputBinding from "./hooks/InputBinding";
import Parent from "./hooks/Parent";
import ToggleVisibility from "./hooks/ToggleVisibility";

function App() {
  return (
    <>
      <div className="">
        {/* <DemoState /> */}
        {/* <ToggleVisibility/> */}
        {/* <InputBinding/> */}
        {/* <FetchUsers/> */}
        {/* <AutoCounter/> */}
        {/* <Parent/> */}
        <div className="flex h-screen w-screen items-center justify-center gap-10 flex-col">
          <ChildA />
          <ChildB />
        </div>
      </div>
    </>
  );
}

export default App;
