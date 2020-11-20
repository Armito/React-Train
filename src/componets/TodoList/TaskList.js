import React from 'react'
import { className } from '../../assets/js/utils'
import './TaskList.scss'

export default function TaskList(props) {
  const {
    taskList,
    valueChecked,
    getToggleTaskId,
    getEditTaskId,
    getChangeTaskId,
    getDeleteTaskId
  } = props
  const handleKeyup = (_id, e) => {
    if (e.keyCode === 13) {
      getChangeTaskId(_id, e.target.value)
    }
  }

  return (
    <div className="todolist-tasklist">
      {
        taskList
          .filter((task) => {
            switch (valueChecked) {
              case 1:
                return !task.completed;
              case 2:
                return task.completed;
              default:
                return true
            }
          })
          .map((task) => (
            <div
              className="todolist-tasklist-item"
              key={task.id}
            >
              <input
                type="checkbox"
                onClick={() => getToggleTaskId(task.id)}
              />
              {
                !task.isEdit ?
                <span
                  className={className({
                    'todolist-tasklist-item-content': true,
                    'completed': task.completed
                  })}
                  onDoubleClick={() => getEditTaskId(task.id)}
                >
                  {task.task}
                </span>
                :
                <input
                  autoFocus
                  onBlur={(e) => getChangeTaskId(task.id, e.target.value)}
                  onKeyUp={(e) => handleKeyup(task.id, e)}
                />
              }
              <button onClick={() => getDeleteTaskId(task.id)}>
                删除
              </button>
            </div>
          ))
      }
    </div>
  )
}
