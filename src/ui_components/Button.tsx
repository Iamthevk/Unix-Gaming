import React from "react";

interface IButton {
  className?: string;
  children: React.ReactNode;
}

function Button({ className, children }: IButton) {
  return (
    <button
      className={`font-inter rounded-full text-secondary-100 ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
