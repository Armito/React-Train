import React, { useState } from 'react'

export default function TaskInput(props) {
  const { getNewTask } = props
  const [newTask, setNewTask] = useState('')
  const handleSetNewTask = (e) => {
    setNewTask(e.target.value)
  }
  const handleKeyup = (e) => {
    if (e.keyCode === 13) {
      handleAddTask()
    }
  }
  const handleAddTask = () => {
    if (newTask.trim()) {
      getNewTask(newTask)
    }
    setNewTask('')
  }

  return (
    <div>
      <input
        value={newTask}
        onChange={handleSetNewTask}
        onKeyUp={handleKeyup}
      />
      <button onClick={handleAddTask}>
        新建
      </button>
    </div>
  )
}
