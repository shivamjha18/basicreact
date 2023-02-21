import Api from "./api";
import "./App.css";
import AppHome from "./portfolio/apphome";
import Home from "./portfolio/apphome";
// import Exercise2 from './exercise2';
// import Exercise3 from './exercise3statehook';
// import Cycle from './lifecycle';
// import StateHook from './statehook';
// import { Todo } from './todolist';

// import NewApi from './components/newapi';
// import FirstApi from './components/firstapi';
// import Router1 from './components/router';
// import Home from './components/reactquery/home';
// import {Form} from './components/reacthookform/reactform'
import Home1 from "./portfolio/home1";

function App() {
  return (
    <div>
      {/* <StateHook/> */}
      {/* <Exercise3/> */}
      {/* <Todo/> */}
      {/* <Cycle/> */}
      {/* <Api/> */}
      {/* <NewApi/> */}
      {/* <FirstApi/> */}
      {/* <Router1/> */}
      {/* <Home/> */}
      {/* <Form/> */}
      {/* <Home1/> */}
      <AppHome />
    </div>
    // <div>
    //   <Exercise2/>
    // </div>
  );
  //   const names=["shivam","kumar","jha","madhubani"];
  //   const users=[
  //     {name:"shivam",age:21},
  //     {name:"alankrit",age:22},
  //   ]

  // return(

  // <div className='center'>
  //   {names.map((name,key)=>{
  //     return <h1 key={key}>{name}</h1>

  //   })}
  //   {users.map((user,index)=>{
  //     return <div>{user.name} {user.age}</div>
  //   })}
  // </div>

  // );

  // ternary operator
  // const age=20;
  // const isGreen=true;
  // return (
  //  <div className='center'>
  //      {age>10?<h1>over age</h1>:<h2>under age</h2>}
  //      <h1 style={{color:isGreen?'green':'red'}}>this has color</h1>
  //  </div>
  // );
}

export default App;
