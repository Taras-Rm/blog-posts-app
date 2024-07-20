import { ButtonHTMLAttributes } from "react";
import { cn } from "../../lib/utils";

function Button({
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "bg-primary px-3 py-2 text-white rounded-md hover:bg-primary-dark shadow-md",
        className
      )}
      {...props}
    ></button>
  );
}

export default Button;
