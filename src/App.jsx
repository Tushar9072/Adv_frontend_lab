/* eslint-disable no-unused-vars */
import { useState } from "react";
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
import DisplayBox from "./Labs/Lab-1/DisplayBox";
import EventDemo from "./Labs/Lab-1/EventDemo";
import ListDisplay from "./Labs/Lab-1/ListDisplay";
import Message from "./Labs/Lab-1/Message";
import MyClassComponent from "./Labs/Lab-1/MyClassComponent";
import MyComponent from "./Labs/Lab-1/MyComponent";
import A from "./Labs/Lab-2/components-2/A";
import FacultyList from "./Labs/Lab-2/FacultyList";
import ProductList from "./Labs/Lab-2/ProductList";
import StudentList from "./Labs/Lab-2/StudentList";
import LoginForm from "./Labs/Lab-2/LoginForm";
import BlogTitle from "./Labs/Lab-3/BlogTitle";
import Card from "./Labs/Lab-3/Card";
import PricingCard from "./Labs/Lab-3/PricingCard";
import Quote from "./Labs/Lab-3/Quote";
import NavLinks from "./Labs/Lab-3/NavLinks";
import UserCard from "./Labs/Lab-3/UserCard";
import HeadingsPage from "./Labs/Lab-3/HeadingsPage";
import Newsletter from "./Labs/Lab-3/Newsletter";
import SideBySideParagraphs from "./Labs/Lab-3/SideBySideParagraph";
import ProductDetails from "./Labs/Lab-3/ProductDetails";
import ImageGallery from "./Labs/Lab-4/ImageGallery";
import ProductCard from "./Labs/Lab-4/ProductCard";
import PageLayout from "./Labs/Lab-4/PageLayout";
import SquareBoxes from "./Labs/Lab-4/SquareBoxes";
import FullScreenBanner from "./Labs/Lab-4/FullScreenBanner";
import ResponsiveTextBox from "./Labs/Lab-4/ResponsiveTextBox";
import ResponsiveCards from "./Labs/Lab-4/ResponsiveCards";
import ScrollableList from "./Labs/Lab-4/ScrollableList";
import ProfilePlaceholder from "./Labs/Lab-4/ProfilePlaceholder";
import ResponsiveVideo from "./Labs/Lab-4/ResponsiveVideo";
import HeroBanner from "./Labs/Lab-5/HeroBannner";
import ImageCard from "./Labs/Lab-5/ImageCard";

function App() {
  // const [name, setName] = useState("Default Name");

  // const [username] = useState("admin");
  // const [password] = useState("1234");

  // const handleLogin = () => {
  //   alert("Logged in with static credentials!");
  // };
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
      {/* <MultiFieldValidationForm/> */}
      {/* <MyComponent/> */}
      {/* <MyClassComponent/> */}
      {/* <h1>Props Demo</h1>

      {/* Passing props */}
      {/* <Message name="Deep" />
      <Message name="Drashti" />
      <Message name="Tushar" /> */} 

      {/* <EventDemo/> */}

      {/* <DisplayBox isDisplay={true} />  */}

      {/* <ListDisplay/> */}

      {/* <StudentList/> */}

      {/* <ProductList/> */}
      {/* <h1>App Component</h1>
      <A name={name} setName={setName} /> */}

      {/* <h1>App Component</h1>
      <A name={name} setName={setName} /> */}

      {/* <h2>Property Drilling Example</h2> */}

      {/* <LoginForm 
        username={username}
        password={password}
        onLogin={handleLogin}
      /> */}

      {/* <BlogTitle/> */}
      {/* <Card/> */}
      {/* <PricingCard/> */}
      {/* <Quote/> */}
      {/* <NavLinks/> */}
      {/* <UserCard/> */}
      {/* <HeadingsPage/> */}
      {/* <Newsletter/> */}
      {/* <SideBySideParagraphs/> */}
      {/* <ProductDetails/> */}
      {/* <ImageGallery/> */}
      {/* <ProductCard/> */}
      {/* <PageLayout/> */}
      {/* <SquareBoxes/> */}
      {/* <FullScreenBanner/> */}
      {/* <ResponsiveTextBox/> */}
      {/* <ResponsiveCards/> */}
      {/* <ScrollableList/> */}
      {/* <ProfilePlaceholder/> */}
      {/* <ResponsiveVideo/> */}
      {/* <HeroBanner/> */}
      <ImageCard/>


    </div>
    </>
  );
}

export default App;
