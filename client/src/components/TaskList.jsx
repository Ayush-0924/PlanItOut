import React from 'react';

const TaskList = ({ tasks }) => (
  <div>
    {tasks.map((task, index) => (
      <div key={index} className="p-2 border-b border-gray-300">
        <p>Task: {task.task}</p>
      </div>
    ))}
  </div>
);

export default TaskList;
