import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps {
  icon?: LucideIcon;
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  className?: string;
}

export function Button({ 
  icon: Icon, 
  children, 
  variant = 'secondary',
  onClick,
  className = ''
}: ButtonProps) {
  const baseStyles = "flex items-center space-x-2 rounded-md transition-all duration-200 transform active:scale-95";
  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-600 px-4 py-2",
    secondary: "text-gray-500 hover:text-blue-500 hover:bg-gray-100 p-2"
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {Icon && <Icon className="w-5 h-5" />}
      {children && <span>{children}</span>}
    </button>
  );
}