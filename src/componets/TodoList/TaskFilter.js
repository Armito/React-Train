import React from 'react'
import { filterOptions } from './FilterOptions'

export default function TaskFilter(props) {
  const { valueChecked, getFilterTaskOption } = props

  return (
    <div>
      {
        filterOptions.map((option) => (
          <label key={option.value}>
            <input
              type="radio"
              name="TASK_STATUS"
              value={option.value}
              checked={option.value === valueChecked}
              onChange={(e) => getFilterTaskOption(e.target.value)}
            />
            { option.label}
          </label>
        ))
      }
    </div>
  )
}
