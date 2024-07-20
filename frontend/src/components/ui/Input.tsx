import { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { cn } from "../../lib/utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  register?: UseFormRegisterReturn;
  error?: string;
}

function Input({
  label,
  error,
  className,
  register,
  ...inputProps
}: InputProps) {
  return (
    <div className="flex flex-col gap-y-1 w-full">
      {label && <label className="pl-1">{label}</label>}
      <input
        {...register}
        {...inputProps}
        className={cn(
          "border border-primary px-2 py-1 outline-none rounded-md focus:border-primary-dark",
          className
        )}
      />
      {error && <span className="pl-1 text-xs text-red-600">{error}</span>}
    </div>
  );
}

export default Input;
