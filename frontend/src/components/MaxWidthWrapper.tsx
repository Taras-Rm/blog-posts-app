import { PropsWithChildren } from "react";

interface MaxWidthWrapperProps extends PropsWithChildren {}

function MaxWidthWrapper({ children }: MaxWidthWrapperProps) {
  return <div className="h-full max-w-screen-lg mx-auto px-4">{children}</div>;
}

export default MaxWidthWrapper;
