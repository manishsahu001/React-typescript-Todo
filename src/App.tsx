import React, {useState } from 'react'
import './App.css'
import InputField from './InputField'
import { Todo } from './model'

const App = () => {

  const [todo, setTodo] = useState<Todo[]>([])
  const [inputText, setInputText] = useState<string>("");

  const addTodo = ()=>{
    if(inputText !== ''){
      const newTodo: Todo = {
        id: Date.now(),
        text: inputText,
        completed: false
      }
      setTodo([...todo, newTodo])
      setInputText('')
    }
  }

  return (
    <>
    <div className="App">

    <h1 className='heading'>Todo List</h1>
    <InputField inputText={inputText} setInputText={setInputText} addTodo={addTodo}/>

    <ul className='list'>
      {todo.map((todo)=>{
        return <li key={todo.id} className='list-item'>{todo.text}</li>
      })}
    </ul>
      </div>
    </>
  )
}

export default App