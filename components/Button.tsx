'use client'

interface ButtonProps {
  variant?: 'primary' | 'secondary'
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

const Button = ({ 
  variant = 'primary', 
  children, 
  className = '',
  onClick 
}: ButtonProps) => {
  const baseStyles = "px-6 py-3 font-medium transition-colors duration-200"
  const variantStyles = {
    primary: "bg-[#D27548] text-white hover:bg-[#B85F35]",
    secondary: "bg-[#CD8B68] text-white hover:bg-[#B85F35]"
  }

  return (
    <button 
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button 