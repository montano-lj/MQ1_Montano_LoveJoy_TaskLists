const Todo = (props) => {
  return (
    <li className="todo stack-small">
      <div className="c-cb">
        <input
          id={props.id}
          type="checkbox"
          defaultChecked={props.completed}
          onChange={() => props.toggleCompleted(props.id)} />
        <label className="todo-label" htmlFor={props.id}>
          {props.name}
        </label>
      </div>
      <div className="btn btn-group">
        <button type="button" className="btn btn-lg btn-outline-info m-1 fs-4">
          Edit <span className="visually-hidden">{props.name}</span>
        </button>
        <button
          type="button"
          className="btn btn__danger btn-lg btn-danger m-1 fs-4"
          onClick={() => props.deleteTask(props.id)} >
          Delete <span className="visually-hidden">{props.name}</span>
        </button>
      </div>
    </li>
  );
}

export default Todo;