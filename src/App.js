import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import TodoList from './components/TodoList';

function App() {

  const [todoList, setTodoList] = useState([
    {id: 0, className: null, classHidden: null, completed: false, editing: false, text: 'Hellodd World'},
    {id: 1, className: null, classHidden: null, completed: false, editing: false, text: 'Hello World edit'},
    {id: 2, className: null, classHidden: null, completed: false, editing: false, text: 'Hello World'},
  ])

  const [btn, setBtn] = useState([
    {id: 1, className: 'selected', text: 'All'},
    {id: 2, className: null, text: 'Active'},
    {id: 3, className: null, text: 'Completed'}
  ])

  const Active = (id) => {
    btn.map(el => el.className =null)
    const idx = btn.findIndex(el => el.id === id)
    const newBtns = btn.slice()
    newBtns[idx].className = 'selected'
    if(newBtns[idx].text === 'Active') {
      onActive()
    } else if (newBtns[idx].text === 'All') {
      onAll()
    } else if (newBtns[idx].text === 'Completed') {
      onCompletedAll()
    }
    setBtn(newBtns)
  }

  const deletCompleted = () => {
    const newTodoList = todoList.slice()
    const newArray = newTodoList.filter(todo => todo.className !== 'completed')
    setTodoList(newArray)
  }

  const itemsNot = () => {
    const newTodoList = todoList.slice()
    const newArray = newTodoList.filter(todo => todo.className === null)
    return newArray.length
  }

  const onCompletedAll = () => {
    const newTodoList = todoList.slice()
    const newArray = newTodoList.filter(todo => todo.className !== 'completed')
    newArray.map(el => el.classHidden = 'hidden')
    setTodoList(newTodoList)
  }

  const onActive = () => {
    const newTodoList = todoList.slice()
    const newArray = newTodoList.filter(todo => todo.className !== null)
    newArray.map(el => el.classHidden = 'hidden')
    setTodoList(newTodoList)
  }

  const onAll = () => {
    const newTodoList = todoList.slice()
    const newArray = newTodoList.filter(todo => todo.classHidden === 'hidden')
    newArray.map(el => el.classHidden = null)
    newArray.map(el => el.classHidden = null)
    setTodoList(newTodoList)
  }

  const onCompleted = (id) => {
    const idx = todoList.findIndex(el => el.id === id)
    const newTodoList = todoList.slice()
    newTodoList[idx].className = 'completed'
    newTodoList[idx].completed = 'true'
    setTodoList(newTodoList)
  }

  const onEditing = (id) => {
    const idx = todoList.findIndex(el => el.id === id)
    const newTodoList = todoList.slice()
    newTodoList[idx].className = 'editing'
    newTodoList[idx].editing = true
    setTodoList(newTodoList)
  }

  const onEnterEditing = (id, text) => {
    const idx = todoList.findIndex(el => el.id === id)
    const newTodoList = todoList.slice()
    newTodoList[idx].className = null
    newTodoList[idx].editing = false
    newTodoList[idx].text = text
    setTodoList(newTodoList)
  }

  const onDeleted = (id) => {
    const idx = todoList.findIndex(el => el.id === id)
    const newTodoList = todoList.slice()
    newTodoList.splice(idx, 1)
    setTodoList(newTodoList)
  }

  const onNewTodo = (text) => {
    const newTodo = {id: Math.random(), className: null, editing: false, text: text}
    setTodoList((newTodoList) => {
      const newArr = [
        newTodo,
        ...newTodoList
      ]
      return newArr
    })
  }

  return (
    <div className="App">
        <section className="todoapp">
      <Header onNewTodo={onNewTodo} />
      <section className="main">
        <TodoList todoList={todoList} onCompleted={onCompleted} onEditing={onEditing} 
        onEnterEditing={onEnterEditing} onDeleted={onDeleted} />
        <Footer itemsNot={() => itemsNot()} onActive={onActive} btn={btn} Active={Active}
        todoList={todoList} deletCompleted={deletCompleted} />
      </section>
    </section>
    </div>
  );
}

export default App;
