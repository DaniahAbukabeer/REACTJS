import Card from "./Card"
import Header from './Header';
import Button from "./Button";
import Student from "./Students";
import UserGreating from "./UserGreeting";
import List from './List';
import ProfilePicture from "./ProfilePicture";
import Buttonnew from "./Buttonnew";
import Counter from "./Counter";
import MyComponent from "./myComponent";
import MyComponentNew from "./MyComponentNew";
import ColorPicker from "./ColorPicker";
import MyCounter from "./MyCounter";
import NewComponent from "./NewComponent";

import MyArrayState from "./MyArrayState";
import ArrayOfObjects from "./ArrayOfObjects";
import ToDoList from "./ToDoList";
import SomeFile from "./SomeFile"
import UseEffect from "./UseEffect";
// import DigitalClock from "./DigitalClock";
import WidthHighet from "./WidthHighet";
import ComponentA from "./ComponentA";
import TryingUseRef from "./TryingUseRef";
import Cars from "./Cars";
import StopWatch from "./StopWatch";
function App() {
  const fruits = [{id:0,name:"apple", calories:95},
                  {id:1,name:"orange", calories: 45},
                  {id:2,name:"banana", calories: 105},
                  {id:3,name:"coconat", calories: 159},
                  {id:4,name:"pineapple", calories: 37}];

    const vegitables = [{id:5,name:"potatoes", calories:110},
                        {id:6,name:"celery", calories: 15},
                        {id:7,name:"carrots", calories: 52},
                        {id:8,name:"corn", calories: 63},
                      {id:9,name:"broccoli", calories: 50}];

    const empty = [];
  return (
  <div>
          {/* <UserGreating isLoggedIn={true} username="DanyBanany"/>

        <ToDoList/> */}
        {/* <UseEffect/> */}
        {/* <WidthHighet/> */}
          {/* <SomeFile /> */}
    {/* 
      
      <
      <Counter/> */}
      {/* <ComponentA/> */}

      <StopWatch/>
      <br/>
      <StopWatch/>
      <br/>
      <StopWatch/>

      {/* <TryingUseRef/> */}

      {/* <Cars/> */}

      {/* <DigitalClock/> */}

      {/* <ColorPicker></ColorPicker> */}

      {/* <MyCounter/> */}
    
      {/* <NewComponent/> */}
    
      {/* <MyArrayState/> */}

      {/* <ArrayOfObjects/> */}

    {/* <MyComponentNew/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Buttonnew/>
    <MyComponent />
    <ProfilePicture></ProfilePicture>

    {fruits.length > 0 ? <List items={fruits} category="Fruits"/> : null}
    {vegitables.length > 0 && <List items={vegitables} category="Vegitables"/>}
    {empty.length > 0 && <List items={empty} category="Empty test"/>}

    <Student name="mewomeow" age={30} isStudent={true}/>
    <Student name="Patric" age={42} isStudent={false}/>
    <Student name="squidward" age={50} isStudent={false}/>
    <Student name="sandy" age={27} isStudent={true}/>
    <Student name="mewomeow" age={30} isStudent={true}/>
    <Student name="heheheh"/> */}

    {/* <Student/>
    <Student name="Larry"/>


    <Button/> */}
  </div>
 );
}

export default App


// import React from 'react'
// import SomeFile from './SomeFile'

// export default function App() {
//   return (
//     <SomeFile/>
//   )
// }
