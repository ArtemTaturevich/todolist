import FooterButton from "./FooterButton"

const Footer = ({itemsNot, Active, btn, onActive, todoList, deletCompleted}) => {

  const itemsN = itemsNot(todoList)

  const buttns = btn.map(el => {

    return (
    <li key={el.id}>
       <FooterButton className={el.className} text={el.text} id={el.id} Active={Active} />
    </li>
    )
  })

  itemsNot()

    return (
        <footer className="footer">
          <span className="todo-count">{itemsN} items left</span>
          <ul className="filters">
            {buttns}
          </ul>
          <button onClick={deletCompleted} className="clear-completed">Clear completed</button>
        </footer>
    )
}
export default Footer