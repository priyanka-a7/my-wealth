// src/components/Button.tsx
import React from 'react';

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => (
  <button
    onClick={onClick}
    className="w-full py-2 px-4 text-white bg-blue-950 rounded-md hover:bg-blue-950 transition"
  >
    {text}
  </button>
);

export default Button;
