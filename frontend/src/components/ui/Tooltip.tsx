import { PropsWithChildren, useState } from "react";

interface TooltipProps extends PropsWithChildren {
  title: string;
}

function Tooltip({ title, children }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      className="relative"
    >
      {isVisible && (
        <div className="bg-primary text-white text-sm flex justify-center text-center p-1 px-2 rounded-md shadow-md absolute bottom-full left-1/2 -translate-x-1/2 mb-1">
          {title}
        </div>
      )}
      <div className="relative">{children}</div>
    </div>
  );
}

export default Tooltip;
