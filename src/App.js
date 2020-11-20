import React from 'react'
// import Clock from './componets/Clock'
// import ClockHook from './componets/ClockHook'
// import Form from './componets/Form'
import TodoList from './componets/TodoList'
import './App.css'

function App() {
  return (
    <div className="App">
      {/* <Clock owner="Armito" />
      <Clock owner="Kaige" />
      <Clock />
      <Form /> */}
      <TodoList owner="Armito" />
    </div>
  )
}

export default App
