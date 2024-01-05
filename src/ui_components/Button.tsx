import React from "react";

interface IButton {
  className?: string;
  children: React.ReactNode;
}

function Button({ className, children }: IButton) {
  return (
    <button
      className={`font-inter text-secondary-100 rounded-full ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
