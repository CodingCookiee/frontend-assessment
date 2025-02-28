import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ 
    children, 
    onClick, 
    className = '', 
    variant = 'primary',
    size = 'md',
    disabled = false,
    type = 'button',
    fullWidth = false,
    icon = null,
    iconPosition = 'left',
    ...props 
}) => {
    // Modern, clean styling with consistent design tokens
    const baseStyles = "font-medium !px-2 !py-2 rounded transition-all duration-300 flex items-center justify-center gap-2";
    
    const variants = {
        primary: "bg-[#FD1640] hover:bg-[#FD1640]/90 text-white hover:shadow-[0_4px_20px_rgba(253,22,64,0.2)]",
        secondary: "bg-transparent border border-[#FD1640] text-[#FD1640] hover:bg-[#FD1640]/5",
        ghost: "bg-transparent text-white hover:bg-white/5",
        subtle: "bg-white/10 text-white hover:bg-white/15"
    };

    const sizes = {
        xs: "py-1 px-3 text-xs",
        sm: "py-1.5 px-4 text-sm",
        md: "py-2 px-5 text-base",
        lg: "py-2.5 px-6 text-lg"
    };

    const widthClass = fullWidth ? 'w-full' : 'w-auto';

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`
                ${baseStyles}
                ${variants[variant]}
                ${sizes[size]}
                ${widthClass}
                ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:transform hover:scale-[1.02]'}
                ${className}
            `}
            {...props}
        >
            {icon && iconPosition === 'left' && <span className="button-icon">{icon}</span>}
            {children}
            {icon && iconPosition === 'right' && <span className="button-icon">{icon}</span>}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    className: PropTypes.string,
    variant: PropTypes.oneOf(['primary', 'secondary', 'ghost', 'subtle']),
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
    disabled: PropTypes.bool,
    type: PropTypes.string,
    fullWidth: PropTypes.bool,
    icon: PropTypes.node,
    iconPosition: PropTypes.oneOf(['left', 'right'])
};

export default Button;