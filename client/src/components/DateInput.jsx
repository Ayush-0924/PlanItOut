import React from 'react';

const DateInput = ({ label, value, onChange }) => (
  <div className="mb-4">
    <label className="block font-bold text-white">{label}</label>
    <input
      type="date"
      value={value}
      onChange={onChange}
      className="mt-1 p-2 border border-gray-300 rounded-md w-full"
    />
  </div>
);

export default DateInput;
