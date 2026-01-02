const Card = ({ 
  children,
  variant = 'default',
  padding = 'md',
  hover = false,
  className = ''
}) => {
  const baseStyles = 'rounded-xl transition-all duration-300';
  
  const variants = {
    default: 'bg-white border-2 border-[#E8E8E8]',
    elevated: 'bg-white shadow-lg',
    dark: 'bg-[#0A0A08] text-white border-2 border-[#16160F]',
    glass: 'bg-white/80 backdrop-blur-sm border-2 border-[#E8E8E8]',
    outline: 'bg-transparent border-2 border-[#4A6572]',
  };
  
  const paddings = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };
  
  const hoverStyles = hover ? 'hover:shadow-xl hover:-translate-y-1 cursor-pointer' : '';
  
  return (
    <div className={`${baseStyles} ${variants[variant]} ${paddings[padding]} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
};

export default Card;