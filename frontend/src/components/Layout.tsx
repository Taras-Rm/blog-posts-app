import { Outlet } from "react-router-dom";
import Header from "./Header";
import MaxWidthWrapper from "./MaxWidthWrapper";

interface LayoutProps {}

function Layout({}: LayoutProps) {
  return (
    <div className="h-screen relative overflow-auto">
      <Header />

      <div className="min-h-[calc(100vh-80px)]">
        <MaxWidthWrapper>
          <Outlet />
        </MaxWidthWrapper>
      </div>
    </div>
  );
}

export default Layout;
