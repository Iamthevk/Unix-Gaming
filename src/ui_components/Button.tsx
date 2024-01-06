import React, { useState } from "react";

interface IButton {
  className?: string;
  children: React.ReactNode;
}

function Button({ className, children }: IButton) {
  const [isHover, setIsHover] = useState<boolean>(false);

  const handleHover = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };
  return (
    <button
      className={`font-inter rounded-full ${className} ${
        isHover ? `bg-primary-200  text-secondary-100` : "text-secondary-100"
      }`}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  );
}

export default Button;
