import { useState} from 'react';
import { nanoid } from 'nanoid';


import FilterButton from "./components/FilterButton";
import Form from "./components/Form";
import Todo from "./components/Todo";


function App(props) {

 
  const [tasks, setTasks] = useState(props.tasks);

  const taskList = tasks.map(task => (
    <Todo id={task.id} name={task.name} completed={task.completed} key={task.id} />
  ));

  const headingText = `${tasks.length} tasks remaining!`;


  //event for adding task
  function addTask(name) {
    const newTasks = {id: "todo-" + nanoid(), name: name, completed: false};
    setTasks([...tasks, newTasks]);
    
  }

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>

      <Form addTask={addTask} />

      <div className="filters btn-group stack-exception">
          <FilterButton/>
          <FilterButton/>
          <FilterButton/>
      </div>
      <h2 id="list-heading">
        {headingText}
      </h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >

        {taskList}


      </ul>
    </div>
  );
}

export default App;
