import { LoaderCircle } from "lucide-react";
import { ButtonHTMLAttributes } from "react";
import { cn } from "../../lib/utils";

type ButtonVariant = "default" | "primary";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  variant?: ButtonVariant;
}

function Button({
  className,
  isLoading = false,
  variant = "primary",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        `${
          variant == "primary"
            ? "text-white bg-primary hover:bg-primary-dark"
            : "text-black bg-white border hover:bg-gray-100"
        }`,
        "px-3 py-2 rounded-md shadow-md",
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
