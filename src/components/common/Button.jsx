const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick,
  disabled = false,
  className = ''
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-[#4A6572] text-white hover:bg-[#3a5159] focus:ring-[#4A6572]',
    secondary: 'bg-[#7A9299] text-white hover:bg-[#6a8289] focus:ring-[#7A9299]',
    outline: 'border-2 border-[#4A6572] text-[#4A6572] hover:bg-[#4A6572] hover:text-white focus:ring-[#4A6572]',
    ghost: 'text-[#0A0A08] hover:bg-[#E8E8E8] focus:ring-[#5A5955]',
    dark: 'bg-[#0A0A08] text-white hover:bg-[#16160F] focus:ring-[#0A0A08]',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;