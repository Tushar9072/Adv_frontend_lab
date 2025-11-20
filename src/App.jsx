import AutoCounter from "./hooks/AutoCounter";
import DemoState from "./hooks/demoState";
import FetchUsers from "./hooks/FetchUsers";
import LikeButton from "./hooks/hook_11/LikeButton";
import TodoApp from "./hooks/hook_11/TodoApp";
import CounterReducer from "./hooks/hook_12/CounterReducer";
import FormReducer from "./hooks/hook_12/FormReducer";
import TodoReducer from "./hooks/hook_12/TodoReducer";
import FocusInputRef from "./hooks/hook_13/FocusInputRef";
import PreviousValueRef from "./hooks/hook_13/PreviousValueRef";
import StopwatchRef from "./hooks/hook_13/StopWatchRef";
import CounterControls from "./hooks/hook_14/objective 2/CounterControls";
import CounterDisplay from "./hooks/hook_14/objective 2/CounterDisplay";
import ThemeControls from "./hooks/hook_14/objective 3/ThemeControls";
import ThemeDisplay from "./hooks/hook_14/objective 3/ThemeDisplay";
import WindowWidthDisplay from "./hooks/hook_14/WindowWidthDisplay";
import DeferredSearch from "./hooks/hook_15/DeferredSearch";
import SlowListRenderer from "./hooks/hook_15/SlowListRenderer";
import TabSwitch from "./hooks/hook_15/TabSwitch";
import MultiFieldValidationForm from "./hooks/hook_16/MultiFieldValidationForm";
import SimpleForm from "./hooks/hook_16/SimpleForm";
import SuccessForm from "./hooks/hook_16/SuccessForm";
import ChildA from "./hooks/hook_5/ChildA";
import ChildB from "./hooks/hook_5/ChildB";
import InputBinding from "./hooks/InputBinding";
import Parent from "./hooks/Parent";
import ToggleVisibility from "./hooks/ToggleVisibility";

function App() {
  return (
    <>
     {/* <WindowWidthDisplay/> */}
     
      {/* <CounterDisplay />
      <CounterDisplay /> Multiple components syncing live */}
      {/* <CounterControls /> */}

     <div className="min-h-screen flex flex-col items-center justify-center gap-10 bg-gray-100">
      {/* <ThemeDisplay />
      <ThemeDisplay /> {/* multiple components react instantly */}
      {/* <ThemeControls /> */} 
      {/* <DeferredSearch /> */}
      {/* <TabSwitch/> */}
      {/* <SlowListRenderer/> */}
      {/* <SimpleForm /> */}
      {/* <SuccessForm/> */}
      <MultiFieldValidationForm/>
    </div>
    </>
  );
}

export default App;
