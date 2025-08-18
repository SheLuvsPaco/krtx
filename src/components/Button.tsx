import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  onMouseEnter,
  onMouseLeave,
  type = 'button',
}) => {
  const baseStyles = 'font-medium rounded-full transition-all duration-300 inline-flex items-center justify-center';
  
  const variantStyles = {
    primary: 'bg-teal-500 text-white hover:bg-teal-600 shadow-lg hover:shadow-xl',
    secondary: 'bg-teal-500 text-white hover:bg-teal-600 shadow-lg hover:shadow-xl',
    outline: 'bg-transparent text-gray-800 border-2 border-gray-800 hover:bg-gray-800 hover:text-white',
  };
  
  const sizeStyles = {
    sm: 'text-sm px-4 py-2',
    md: 'text-base px-6 py-3',
    lg: 'text-lg px-8 py-4',
  };
  
  return (
    <button
      type={type}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </button>
  );
};

export default Button;