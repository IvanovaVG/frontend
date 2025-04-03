import './App.css';
import React, { useState , useEffect} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToDoView from './components/ToDoList';


function App() {

  const [todoList, setTodoList] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    axios.get('http://localhost:8000/api/todo/')
      .then(response => {
        setTodoList(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the todo list!', error);
      });
  });

  const addTodoHandler = () => {

    axios.post('http://localhost:8000/api/todo/', {'title': title, 'description': description})
      .then(response => console.log(response))
      .catch(error => {
        console.error('There was an error adding the task!', error);
      });
  }
  return (
     <div class="App list-group-item justify-content-center align-items-center mx-auto" style={{"width":"400px","backgroundColor":"white",
      "marginTop":"15px"}}>
      <h1 className='card text-white bg-primary mb-1' styleName="max-width: 20rem;">Task Manager</h1>
      <h6 className='card text-white bg-primary mb-3'>FastAPI - React - MongoDB</h6>
      <div className='card-body'>
        <h5 className='card text-white bg-dark mb-3'> Add your task</h5>
        <span className='card-text'>
          <input type="text" className="mb-2 form-control titleIn" onChange={event => setTitle(event.target.value)} placeholder="Title" />
          <input type="text" className="mb-2 form-control desIn" onChange={event => setDescription(event.target.value)} placeholder="Description" />
          <button className="btn btn-outline-primary mx-2 mb-3" style={{'borderRadius':'50px', 'font-weight': 'bold'}} onClick={addTodoHandler}>Add Task</button>
        </span>

        <h5 className='card text-white bg-dark mb-3'> Your tasks </h5>
        <div>
          <ToDoView todos={todoList} />
        </div>
      </div>
      <h6 className='card text-dark bg-warning py-1 mb-0'> Copyright 2025, All rights reserved &copy;</h6>
     </div>
   
  );
}

export default App;

