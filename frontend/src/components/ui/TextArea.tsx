import { TextareaHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { cn } from "../../lib/utils";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  register?: UseFormRegisterReturn;
  error?: string;
}

function TextArea({
  label,
  className,
  register,
  error,
  ...textareaProps
}: TextAreaProps) {
  return (
    <div className="flex flex-col gap-y-1 w-full">
      {label && <label className="pl-1">{label}</label>}
      <textarea
        {...register}
        {...textareaProps}
        className={cn(
          "border border-primary px-2 py-1 outline-none rounded-md min-h-24 focus:border-primary-dark",
          className
        )}
      />
      {error && <span className="pl-1 text-xs text-red-600">{error}</span>}
    </div>
  );
}

export default TextArea;
