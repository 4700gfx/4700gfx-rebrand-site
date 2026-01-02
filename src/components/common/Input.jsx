import React, { useState } from 'react';

const Input = ({ 
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  helperText,
  disabled = false,
  required = false,
  className = ''
}) => {
  const [isFocused, setIsFocused] = useState(false);
  
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-[#0A0A08] mb-2">
          {label}
          {required && <span className="text-[#7A9299] ml-1">*</span>}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`
          w-full px-4 py-3 
          bg-white 
          border-2 rounded-lg
          text-[#0A0A08] 
          placeholder-[#5A5955]
          transition-all duration-200
          focus:outline-none 
          disabled:bg-[#E8E8E8] 
          disabled:cursor-not-allowed
          ${error 
            ? 'border-red-500 focus:border-red-600 focus:ring-2 focus:ring-red-200' 
            : isFocused 
              ? 'border-[#4A6572] ring-2 ring-[#4A6572]/20' 
              : 'border-[#E8E8E8] hover:border-[#7A9299]'
          }
        `}
      />
      {(error || helperText) && (
        <p className={`mt-2 text-sm ${error ? 'text-red-600' : 'text-[#5A5955]'}`}>
          {error || helperText}
        </p>
      )}
    </div>
  );
};

export default Input;