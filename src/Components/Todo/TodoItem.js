import "./TodoItem.css";

const TodoItem = ({ todo, onEdit, onDelete }) => {
  return (
    <li className="todo-item">
      <span>{todo.text}</span>
      <div>
        <button className="update" onClick={onEdit}>
          Edit
        </button>
        <button className="delete" onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
