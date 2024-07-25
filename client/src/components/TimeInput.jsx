import React from 'react';

const TimeInput = ({ label, value, onChange }) => (
  <div className="mb-4">
    <label className="block font-bold text-white">{label}</label>
    <input
      type="time"
      value={value}
      onChange={onChange}
      className="mt-1 p-2 border border-gray-300 rounded-md w-full"
    />
  </div>
);

export default TimeInput;
