import { useState } from 'react'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  const [todos, settodos] = useState([])
  fetch("http://localhost:3000/todo")
  .then(async (res)=>{
    const json=await res.json();
    settodos(json.dataintodo)
  })

  return (
    <div>
      <CreateTodo/>
      <Todos todos={todos}></Todos>
    </div>
  )
}

export default App
