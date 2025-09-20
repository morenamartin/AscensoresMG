import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string; 
  as?: "input" | "textarea";
}

const Input: React.FC<InputProps> = ({className = "", ...props}) => {
    return(
        <input 
            {...props}
            className={`border rounded-xl px-3 py-1 w-[17rem] focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
        />
    )
}

export default Input