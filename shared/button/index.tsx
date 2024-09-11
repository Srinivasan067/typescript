import React, { FC } from "react";

interface ButtonProps {
  btnText: string | React.ReactNode;
  className?: string;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  asChild?: boolean;
}

const ACButton: FC<ButtonProps> = ({
  btnText,
  className = "",
  variant = 'default',
  size = 'default',
  asChild = false
}) => {
  return (
    <button
      className={`${className} ${variant} ${size}`}
      aria-label={typeof btnText === 'string' ? btnText : ''}
    >
      {btnText}
    </button>
  );
};

export default ACButton;
