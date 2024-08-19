import { useState } from "react"
import TodoListItem from "./TodoListItem"

const TodoList = ({todoList, onCompleted, onEditing, onEnterEditing, onDeleted}) => {

    const [newText, setNewText] = useState('')

    const onKeyEnter = (e, id) => {
        if(e.code === 'Enter') {
            if (newText.length !== 0) {
                onEnterEditing(id, newText)
                setNewText('')
            }
        }
    }

    const onChangeD = (e) => {
        setNewText(e.target.value)
    }

    const todos = todoList.map(todo => {
        return (
            <li key={todo.id} className={`${todo.className} ${todo.classHidden}`}>
                <TodoListItem onCompleted={onCompleted} onEditing={onEditing} onDeleted={onDeleted} id={todo.id} className={todo.className} 
                text={todo.text} time={todo.time} />
                {todo.editing ? <input value={newText} onChange={onChangeD} onKeyDown={(e) => onKeyEnter(e, todo.id)} autoFocus type="text" className="edit" /> : null}
            </li>
        )
    })

    return (
        <ul className="todo-list">
            {todos}
        </ul>
    )
}

export default TodoList