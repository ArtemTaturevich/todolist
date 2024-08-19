const TodoListItem = ({onCompleted, onEditing, id, onDeleted, className, text, time}) => {

    return (
        <div className="view">
            <input className="toggle" type="checkbox" />
            <label>
            <span className="description" onClick={() => onCompleted(id)}>{text}</span>
            <span className="created">{time}</span>
            </label>
            <button className="icon icon-edit" onClick={() => onEditing(id)}></button>
            <button className="icon icon-destroy" onClick={() => onDeleted(id)}></button>
        </div>
    )
}

export default TodoListItem