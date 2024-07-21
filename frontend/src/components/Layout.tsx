import { Outlet } from "react-router-dom";
import Header from "./Header";
import MaxWidthWrapper from "./MaxWidthWrapper";

interface LayoutProps {}

function Layout({}: LayoutProps) {
  return (
    <div className="h-screen relative">
      <Header />

      <div className="h-[calc(100%-80px)]">
        <MaxWidthWrapper>
          <Outlet />
        </MaxWidthWrapper>
      </div>
    </div>
  );
}

export default Layout;
