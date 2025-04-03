import axios from 'axios';
import React from 'react';

function ToDoItem(props) {
  const deleteTodoHandler = (title) => {
    axios.delete(`http://localhost:8000/api/todo${title}/`)
      .then(response => console.log(response.data))
      .catch(error => {
        console.error('There was an error deleting the task!', error);
      });
  }

  return (
    <div>
        <p>
            <span style={{'fontWeight': 'bold, ubderline'}}>{props.todo.title}:</span> {props.todo.description}
            <button onClick={()=>deleteTodoHandler(props.todo.title)} className="btn btn-outline-danger my-2 mx-2" 
            style={{'borderRadius':'50px'}}>X</button>
            <hr />
        </p>
    </div>
  );
}
export default ToDoItem;