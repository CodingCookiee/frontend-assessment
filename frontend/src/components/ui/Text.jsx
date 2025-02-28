/* eslint-disable react/prop-types */
import React from 'react';

const Text = ({ 
    as: Component = 'p',
    children,
    className = '',
    weight = 'regular',
    size = 'base',
    ...props 
}) => {
    const weightClasses = {
        thin: 'font-[100]',
        extralight: 'font-[200]',
        light: 'font-[300]',
        regular: 'font-[400]',
        medium: 'font-[500]',
        semibold: 'font-[600]',
        bold: 'font-[700]',
        extrabold: 'font-[800]',
        black: 'font-[900]'
    };

    const sizeClasses = {
        xs: 'text-xs',
        sm: 'text-sm',
        base: 'text-base',
        lg: 'text-lg',
        xl: 'text-xl',
        '2xl': 'text-2xl',
        '3xl': 'text-3xl',
        '4xl': 'text-4xl',
        '5xl': 'text-5xl'
    };

    const combinedClasses = `
        font-['Inter']
        ${weightClasses[weight] || weightClasses.regular}
        ${sizeClasses[size] || sizeClasses.base}
        ${className}
    `.trim();

    return (
        <Component className={combinedClasses} {...props}>
            {children}
        </Component>
    );
};

export default Text;
