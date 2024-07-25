import React, { useState } from 'react';

const TextInput = ({task}) => {
  
  return (
    <div className="mb-4">
      <label className="block text-gray-700">Write your task...</label>
      <textarea
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="mt-1 p-2 border border-gray-300 rounded-md w-full xy"
      />
    </div>
  );
};

export default TextInput;
