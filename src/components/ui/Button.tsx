import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  disabled = false,
}) => {
  const baseStyles =
    'font-cinzel rounded-md transition-all duration-200 border-2 flex items-center justify-center';
  const variantStyles = {
    primary:
      'bg-bronze text-ivory border-bronze-dark hover:bg-bronze-dark disabled:bg-bronze/50',
    secondary:
      'bg-transparent text-gold border-gold hover:bg-gold/10 disabled:text-gold/50',
    ghost:
      'bg-transparent text-copper border-transparent hover:text-copper-dark disabled:text-copper/50',
  };
  const sizeStyles = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
