import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'bordered' | 'gradient';
  style?: React.CSSProperties;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  variant = 'default',
  style,
}) => {
  const variantStyles = {
    default: 'bg-white shadow-md',
    bordered: 'bg-white border-2 border-[#E8A0BF]',
    gradient: 'bg-gradient-to-br from-[#FFFAF8] to-[#FDEBE8]',
  };

  return (
    <div
      className={`rounded-xl p-6 ${variantStyles[variant]} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};
