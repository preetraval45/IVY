import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  multiline?: boolean;
  rows?: number;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  multiline = false,
  rows = 4,
  className = '',
  ...props
}) => {
  const baseStyles = `
    w-full px-4 py-3 rounded-lg border-2 transition-all duration-200
    focus:outline-none focus:ring-2 focus:ring-[#E8A0BF] focus:ring-opacity-50
    ${error ? 'border-[#C75B7A]' : 'border-[#F4C2C2]'}
    bg-white text-[#523040] placeholder-[#AA8294]
  `;

  const InputComponent = multiline ? 'textarea' : 'input';

  return (
    <div className="w-full">
      {label && (
        <label className="block mb-2 text-sm font-medium text-[#523040]">
          {label}
        </label>
      )}
      <InputComponent
        className={`${baseStyles} ${className}`}
        rows={multiline ? rows : undefined}
        {...(props as any)}
      />
      {error && (
        <p className="mt-1 text-sm text-[#C75B7A]">{error}</p>
      )}
      {helperText && !error && (
        <p className="mt-1 text-sm text-[#AA8294]">{helperText}</p>
      )}
    </div>
  );
};
