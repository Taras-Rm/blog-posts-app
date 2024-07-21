import { LoaderCircle } from "lucide-react";
import { ButtonHTMLAttributes } from "react";
import { cn } from "../../lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

function Button({
  className,
  isLoading = false,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "bg-primary px-3 py-2 text-white rounded-md hover:bg-primary-dark shadow-md",
        className
      )}
      disabled={isLoading}
      {...props}
    >
      <div className="flex gap-x-2">
        {isLoading && <LoaderCircle className="animate-spin" />}
        {children}
      </div>
    </button>
  );
}

export default Button;
