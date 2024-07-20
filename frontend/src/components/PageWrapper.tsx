import { PropsWithChildren } from "react";

interface PageWrapperProps extends PropsWithChildren {
  title?: string;
}

function PageWrapper({ children, title }: PageWrapperProps) {
  return (
    <div className="h-full py-8">
      {title && (
        <div className="border-b border-primary-dark pb-2 pl-3 mb-6">
          <h2 className="text-4xl font-semibold">{title}</h2>
        </div>
      )}
      {children}
    </div>
  );
}

export default PageWrapper;
