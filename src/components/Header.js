import { useState } from "react"

const Header = ({onNewTodo}) => {

    const [newText, setNewText] = useState('')

    const onKey = (e) => {
        if(e.code === 'Enter') {
            if (newText.length !== 0) {
                onNewTodo(newText)
                setNewText('')
    }}}

    return (
        <header className="header">
            <h1>todos</h1>
            <input value={newText} onChange={(e) => setNewText(e.target.value)} onKeyDown={(e) => onKey(e)}
             className="new-todo" placeholder="What needs to be done?" autoFocus />
        </header>
    )
}

export default Header