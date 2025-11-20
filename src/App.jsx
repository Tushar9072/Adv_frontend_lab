import AutoCounter from "./hooks/AutoCounter";
import DemoState from "./hooks/demoState";
import FetchUsers from "./hooks/FetchUsers";
import ChildA from "./hooks/hook_5/ChildA";
import ChildB from "./hooks/hook_5/ChildB";
import Status from "./hooks/hook_6/program1/Status";
import AuthStatus from "./hooks/hook_6/program2/AuthStatus";
import TimerStatus from "./hooks/hook_6/program3/TimerStatus";
import DeferredChat from "./hooks/hook_7/DeferredChat";
import LiveTyping from "./hooks/hook_7/LiveTyping";
import SearchList from "./hooks/hook_7/SearchList";
import InputBinding from "./hooks/InputBinding";
import Parent from "./hooks/Parent";
import Parent1 from "./hooks/hook_8/program1/Parent";
import ToggleVisibility from "./hooks/ToggleVisibility";
import Parent2 from "./hooks/hook_8/program2/Parent";
import Parent3 from "./hooks/hook_8/program3/Parent";
import MeasureWidth from "./hooks/hook_9/MeasureWidth";
import ChatWindow from "./hooks/hook_9/ChatWindow";
import AnimateBox from "./hooks/hook_9/AnimateBox";
import FactorialMemo from "./hooks/hook_10/FactorialMemo";
import FilterListMemo from "./hooks/hook_10/FilterListMemo";
import DerivedNameMemo from "./hooks/hook_10/DerivedNameMemo";

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
        {/* <div className="flex h-screen w-screen items-center justify-center gap-10 flex-col">
          <ChildA />
          <ChildB />
        </div> */}
        {/* <Status/> */}
        {/* <AuthStatus/> */}
        {/* <TimerStatus/> */}
        {/* <SearchList/> */}
        {/* <LiveTyping/> */}
        {/* <DeferredChat/> */}
        {/* <Parent1/> */}
        {/* <Parent2/> */}
        {/* <Parent3/> */}
        {/* <MeasureWidth/> */}
        {/* <ChatWindow/> */}
        {/* <AnimateBox/> */}
        {/* <FactorialMemo/> */}
        {/* <FilterListMemo/> */}
        <DerivedNameMemo/>
      </div>
    </>
  );
}

export default App;
