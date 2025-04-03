import ToDoItem from "./ToDo"; 

function ToDoView(props) {
  return (
    <div>
        <ul> 
            {props.todos.map((todo) => (
            <ToDoItem todo={todo} />
        ))}
        </ul>
       
    </div>
  );
}

export default ToDoView;