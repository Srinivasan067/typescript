import React, { FC } from "react";
interface ButtonProps {
    btnText: string | React.ReactNode;
    className?: string;
    variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
    size?: 'default' | 'sm' | 'lg' | 'icon';
    asChild?: boolean;
}
declare const ACButton: FC<ButtonProps>;
export default ACButton;
