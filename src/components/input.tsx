// src/components/Input.tsx
import React from 'react';

interface InputProps {
  label: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  type: string;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ label, value, onChange, type, placeholder }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
      placeholder={placeholder}
    />
  </div>
);

export default Input;
