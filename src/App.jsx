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
import Lab6_1 from "./Lab_6/Lab6_1";
import Lab6_2 from "./Lab_6/Lab6_2";
import Lab6_3 from "./Lab_6/Lab6_3";
import Lab6_4 from "./Lab_6/Lab6_4";
import Lab6_5 from "./Lab_6/Lab6_5";
import Lab6_6 from "./Lab_6/Lab6_6";
import Lab6_7 from "./Lab_6/Lab6_7";
import Lab7_1 from "./Lab_7/Lab7_1";
import Lab7_2 from "./Lab_7/Lab7_2";
import Lab7_3 from "./Lab_7/Lab7_3";
import Lab7_4 from "./Lab_7/Lab7_4";
import Lab7_5 from "./Lab_7/Lab7_5";
import Lab7_6 from "./Lab_7/Lab7_6";
import Lab7_7 from "./Lab_7/Lab7_7";
import Lab7_8 from "./Lab_7/Lab7_8";
import Lab7_9 from "./Lab_7/Lab7_9";
import Lab7_10 from "./Lab_7/Lab7_10";
import Lab8_1 from "./Lab_8/Lab8_1";
import Lab8_2 from "./Lab_8/Lab8_2";
import Lab8_3 from "./Lab_8/Lab8_3";
import Lab8_4 from "./Lab_8/Lab8_4";
import Lab8_5 from "./Lab_8/Lab8_5";
import Lab8_6 from "./Lab_8/Lab8_6";
import Lab8_7 from "./Lab_8/Lab8_7";
import Lab8_8 from "./Lab_8/Lab8_8";
import Lab8_9 from "./Lab_8/Lab8_9";
import Lab8_10 from "./Lab_8/Lab8_10";
import Lab10_1 from "./Lab_10/Lab10_1";
import Lab10_2 from "./Lab_10/Lab10_2";
import Lab10_3 from "./Lab_10/Lab10_3";
import Lab10_4 from "./Lab_10/Lab10_4";
import Lab10_5 from "./Lab_10/Lab10_5";
import Lab10_6 from "./Lab_10/Lab10_6";
import Lab10_7 from "./Lab_10/Lab10_7";
import Lab11_1 from "./Lab_11/Lab11_1";
import Lab11_2 from "./Lab_11/Lab11_2";
import Lab11_3 from "./Lab_11/Lab11_3";
import Lab11_4 from "./Lab_11/Lab11_4";
import Lab11_5 from "./Lab_11/Lab11_5";
import Lab11_6 from "./Lab_11/Lab11_6";
import Lab11_7 from "./Lab_11/Lab11_7";
import Lab12_1 from "./Lab_12/Lab12_1";
import Lab12_2 from "./Lab_12/Lab12_2";
import Lab12_3 from "./Lab_12/Lab12_3";
import Lab12_4 from "./Lab_12/Lab12_4";
import Lab12_5 from "./Lab_12/Lab12_5";
import Lab12_6 from "./Lab_12/Lab12_6";
import Lab12_7 from "./Lab_12/Lab12_7";
import Lab13_1 from "./Lab_13/Lab13_1";
import Lab13_2 from "./Lab_13/Lab13_2";
import Lab13_3 from "./Lab_13/Lab13_3";
import Lab13_4 from "./Lab_13/Lab13_4";
import Lab13_5 from "./Lab_13/Lab13_5";
import Lab13_6 from "./Lab_13/Lab13_6";
import Lab13_7 from "./Lab_13/Lab13_7";
import Lab14_1 from "./Lab_14/Lab14_1";
import Lab14_2 from "./Lab_14/Lab14_2";
import Lab14_3 from "./Lab_14/Lab14_3";
import Lab14_4 from "./Lab_14/Lab14_4";
import Lab15_1 from "./Lab_15/Lab15_1";
import Lab15_2 from "./Lab_15/Lab15_2";
import Lab15_3 from "./Lab_15/Lab15_3";
import Lab15_4 from "./Lab_15/Lab15_4";
import Lab15_5 from "./Lab_15/Lab15_5";
import Lab15_6 from "./Lab_15/Lab15_6";
import Lab15_7 from "./Lab_15/Lab15_7";
import Lab15_8 from "./Lab_15/Lab15_8";
import Lab15_9 from "./Lab_15/Lab15_9";
import Lab16_1 from "./Lab_16/Lab16_1";

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
        {/* <DerivedNameMemo/> */}
        {/* <Lab6_1/> */}
        {/* <Lab6_2/> */}
        {/* <Lab6_3/> */}
        {/* <Lab6_4/> */}
        {/* <Lab6_5/> */}
        {/* <Lab6_6/> */}
        {/* <Lab6_7/> */}
        {/* <div className="space-y-10 p-6">
          <Lab7_1 />
          <Lab7_2/>
          <Lab7_3/>
          <Lab7_3/>
          <Lab7_4/>
          <Lab7_5/>
          <Lab7_6/>
          <Lab7_7/>
          <Lab7_8/>
          <Lab7_9/>
          <Lab7_10/>
        </div> */}
        {/* <div className="space-y-10">
          <Lab8_1 />
          <Lab8_2/>
          <Lab8_3/>
          <Lab8_4/>
          <Lab8_5/>
          <Lab8_6/>
          <Lab8_7/>
          <Lab8_8/>
          <Lab8_9/>
          <Lab8_10/>
        </div> */}
        {/* <div>
          <Lab10_1 />
          <Lab10_2 />
          <Lab10_3 />
          <Lab10_4 />
          <Lab10_5 />
          <Lab10_6 />
          <Lab10_7 />
        </div> */}
        {/* <div style={{ display: "grid", gap: "2rem", padding: "2rem" }}>
          <Lab11_1 />
          <Lab11_2 />
          <Lab11_3 />
          <Lab11_4 />
          <Lab11_5 />
          <Lab11_6 />
          <Lab11_7 />
        </div> */}
        {/* <div style={{ display: "grid", gap: "2rem", padding: "2rem" }}>
          <Lab12_1 />
          <Lab12_2 />
          <Lab12_3 />
          <Lab12_4 />
          <Lab12_5 />
          <Lab12_6 />
          <Lab12_7 />
        </div> */}
        {/* <div style={{ display: "grid", gap: "2rem", padding: "2rem" }}>
          <Lab13_1 />
          <Lab13_2 />
          <Lab13_3 />
          <Lab13_4 />
          <Lab13_5 />
          <Lab13_6 />
          <Lab13_7 />
        </div> */}
        {/* <div style={{ display: "grid", gap: "2rem", padding: "2rem" }}>
          <Lab14_1 />
          <Lab14_2 />
          <Lab14_3 />
          <Lab14_4 />
        </div> */}
        {/* <div style={{ display: "grid", gap: "2rem", padding: "2rem" }}>
          <Lab13_1 />
          <Lab13_2 />
          <Lab13_3 />
          <Lab13_4 />
          <Lab13_5 />
          <Lab13_6 />
          <Lab13_7 />
        </div> */}
        {/* <div>
          <Lab15_1 />
          <Lab15_2 />
          <Lab15_3 />
          <Lab15_4 />
          <Lab15_5 />
          <Lab15_6 />
          <Lab15_7 />
          <Lab15_8 />
          <Lab15_9 />
        </div> */}
        <Lab16_1/>
      </div>
    </>
  );
}

export default App;
