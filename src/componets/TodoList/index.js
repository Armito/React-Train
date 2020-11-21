import React, { useState } from 'react'
import TaskInput from './TaskInput'
import TaskFilter from './TaskFilter'
import TaskList from './TaskList'
import { createRandomId } from '../../assets/js/utils'

export default function TodoList(props) {
  const { owner } = props
  const [taskList, setTaskList] = useState([])
  const [valueChecked, setValueChecked] = useState(0)
  const addTask = (_newTask) => {
    setTaskList([
      ...taskList,
      {
        task: _newTask,
        id: createRandomId(),
        completed: false,
        isEdit: false
      }
    ])
  }
  const filterTask = (_val) => {
    setValueChecked(Number(_val))
  }
  const toggleTask = (_id) => {
    setTaskList(taskList.map((task) => {
      if (task.id === _id) {
        return {
          ...task,
          completed: !task.completed
        }
      }
      return task
    }))
  }
  const editTask = (_id) => {
    if (taskList.find((task) => task.id === _id).completed) {
      return
    }
    setTaskList(taskList.map((task) => {
      if (task.id === _id) {
        return {
          ...task,
          isEdit: true
        }
      }
      return task
    }))
  }
  const changeTask = (_id, _newTask) => {
    if (!_newTask.trim().length) {
      return
    }
    setTaskList(taskList.map((task) => {
      if (task.id === _id) {
        return {
          ...task,
          task: _newTask.trim(),
          isEdit: false
        }
      }
      return task
    }))
  }
  const deleteTask = (_id) => {
    setTaskList(taskList.filter((task) => task.id !== _id))
  }

  return (
    <div className="todolist">
      <h3>{owner}'s TodoList</h3>
      <TaskInput getNewTask={addTask} />
      <TaskFilter
        valueChecked={valueChecked}
        getFilterTaskOption={filterTask}
      />
      <TaskList
        taskList={taskList}
        valueChecked={valueChecked}
        getToggleTaskId={toggleTask}
        getEditTaskId={editTask}
        getChangeTaskId={changeTask}
        getDeleteTaskId={deleteTask}
      />
    </div>
  )
}
