/* eslint-disable react/jsx-no-comment-textnodes */
import Todo from "./components/todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";

import {eDebugValue, useEffect, useState } from "react";



function App() {

  const [name, setName] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(()=>{
    
    try {
    fetch('http://localhost/REST/hs/Task/receiveTask').then(response => response.json()).then(res=>setName(res))
     }
     catch(error){
      console.error(error);
      }
 
    setLoading(false);
  },[])

  function addTusk(name){
    alert(name); 
  }

 if (loading){
   return <div>loading</div>
 }

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
       <Form  addTusk = {addTusk}/>
      <div className="filters btn-group stack-exception">
        <FilterButton  name = "All" />
        <FilterButton  name = "Active" />
        <FilterButton  name = "Completed" />

      </div>
      <h2 id="list-heading">
        3 tasks remaining</h2>
      
  
      <ul  role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">

        <TaskList visbleTask={name}/>
      </ul>
    </div>
  );
}
const TaskList = ({visbleTask})=>{
  const visble = visbleTask.slice(0,5);
  console.log(visble);
  return(
      <>
      {visble.map(task =>(<Todo 
      id={task.id} 
      name ={task.name} 
      completed ={task.completed} 
      key = {task.id}
      />))}
      </>
  )
}

export default App;
